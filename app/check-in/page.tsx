"use client";

import React, { useEffect, useRef, useState } from "react";
import useSWR from "swr";
import jsQR, { QRCode } from "jsqr";
import { Container } from "@/components/container";
import { Text } from "@/components/text";
import { CheckInResponse } from "@/app/api/check-in/route";
import { Button } from "@/components/button";

const fetcher = async (url: string, barcode: string, passcode: string) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${passcode}`,
    },
    body: JSON.stringify({ barcode }),
  });

  if (!response.ok) {
    // Attempt to parse error message from response
    const errorMessage = `Error (${response.status}: ${response.statusText})`;
    throw new Error(errorMessage);
  }

  return response.json();
};

const CheckInPage: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [qrCodeData, setQrCodeData] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [passcode, setPasscode] = useState<string>("");
  const printPreviewIFrameRef = useRef<HTMLIFrameElement>(null);

  const {
    data,
    isLoading,
    mutate,
    error: swrError,
  } = useSWR(
    qrCodeData ? ["/api/check-in", qrCodeData, passcode] : null,
    ([url, qrCodeData, passcode]) => fetcher(url, qrCodeData, passcode),
    {
      revalidateOnMount: true,
      dedupingInterval: 0,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      keepPreviousData: false,
    },
  );

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "environment" },
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.playsInline = true;
          videoRef.current.play();
        }
      } catch (err) {
        console.error("Error accessing camera:", err);
      }
    };

    startCamera();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, []);

  const drawLine = (
    begin: QRCode["location"]["topRightCorner"],
    end: QRCode["location"]["topRightCorner"],
    color: string,
  ) => {
    if (canvasRef.current) {
      const canvas2d = canvasRef.current.getContext("2d");
      if (canvas2d !== null) {
        canvas2d.beginPath();
        canvas2d.moveTo(begin.x, begin.y);
        canvas2d.lineTo(end.x, end.y);
        canvas2d.lineWidth = 4;
        canvas2d.strokeStyle = color;
        canvas2d.stroke();
      }
    }
  };

  const printIframe = () => {
    if (printPreviewIFrameRef.current) {
      const iframeWindow = printPreviewIFrameRef.current.contentWindow;
      if (iframeWindow) {
        iframeWindow.focus();
        iframeWindow.print();
      }
    }
  };

  useEffect(() => {
    const detectQRCode = () => {
      if (videoRef.current && canvasRef.current) {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        if (video.readyState === video.HAVE_ENOUGH_DATA && context) {
          canvas.height = video.videoHeight;
          canvas.width = video.videoWidth;
          context.drawImage(video, 0, 0, canvas.width, canvas.height);
          const imageData = context.getImageData(
            0,
            0,
            canvas.width,
            canvas.height,
          );
          const code: QRCode | null = jsQR(
            imageData.data,
            imageData.width,
            imageData.height,
          );

          if (code) {
            drawLine(
              code.location.topLeftCorner,
              code.location.topRightCorner,
              "#FF3B58",
            );
            drawLine(
              code.location.topRightCorner,
              code.location.bottomRightCorner,
              "#FF3B58",
            );
            drawLine(
              code.location.bottomRightCorner,
              code.location.bottomLeftCorner,
              "#FF3B58",
            );
            drawLine(
              code.location.bottomLeftCorner,
              code.location.topLeftCorner,
              "#FF3B58",
            );
            if (code.binaryData.length > 0) {
              setQrCodeData(code.data);
            }
          }
        }
      }
      requestAnimationFrame(detectQRCode);
    };

    detectQRCode();
  }, []);

  const eventAttendee = data as CheckInResponse;

  const iframeContent = eventAttendee
    ? `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          html, body {
              width: 62mm;
              height: 29mm;
              overflow: hidden;
              page-break-after: avoid;
              page-break-inside: avoid;
          }
          body { 
            line-height: 1; 
            font-family: Arial, 
            sans-serif; 
            background-color: white;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          h1 { 
              font-size: 15pt;
              margin: 0 0 1mm 0;
            }
          p {
            font-size: 10pt;
            margin: 0 0 1mm 0;
          }
          @page {
            size: 62mm 28mm;
            margin: 3mm 3mm;
          }
          @media print {
              html, body {
                width: 62mm;
                height: 29mm;
                margin: 0!important;
                padding: 0!important;
                overflow: hidden;
              }
          }
          @media screen {
             body {
              margin: 3mm 3mm;
           }
          }
        </style>
        <title>Ticket</title>
      </head>
      <body>
        <h1>${eventAttendee.profile.name}</h1>
        <p>Current time: ${new Date().toLocaleTimeString()}</p>
      </body>
    </html>
  `
    : "";

  return (
    <div className={"flex justify-center"}>
      <main className={"w-full max-w-7xl pt-[25px] lg:pt-0 z-20 pb-40"}>
        <Container>
          <div className="mt-[100px] md:mt-[20vh] z-10">
            <div className="lg:flex items-center">
              <Text textType={"sub_hero"} className="text-gradient text-left">
                Check In
              </Text>
            </div>
            <div className="mt-20 flex gap-8">
              <div className="flex flex-col gap-2">
                <div>
                  <video
                    ref={videoRef}
                    autoPlay
                    muted
                    style={{ display: "none" }}
                  />
                  <canvas ref={canvasRef} style={{ maxWidth: "100%" }} />
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-3 items-center">
                    <label htmlFor="passcode">Passcode: </label>
                    <input
                      onChange={(e) => setPasscode(e.target.value)}
                      className="px-2 py-1 bg-gray-900 border border-white"
                      id="passcode"
                      type="password"
                    />
                  </div>
                  <div>
                    <Button onClick={() => printIframe()}>Print</Button>
                  </div>
                </div>
                <div className="flex flex-col">
                  {qrCodeData && (
                    <div>
                      <p>Scanned Barcode: {qrCodeData}</p>
                      {eventAttendee && (
                        <Text
                          className={
                            eventAttendee.wasAlreadyCheckedIn
                              ? "text-yellow-500"
                              : "text-green-500"
                          }
                        >
                          {eventAttendee.wasAlreadyCheckedIn
                            ? "Already checked in"
                            : "Successfully checked in"}
                        </Text>
                      )}
                      {isLoading && <Text>Loading</Text>}
                    </div>
                  )}
                  {error && <p className="text-red-500">{error}</p>}
                  {swrError && (
                    <p className="text-red-500">{swrError.message}</p>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <Text textType="sub_title">Print Preview</Text>
                <iframe
                  srcDoc={iframeContent}
                  ref={printPreviewIFrameRef}
                  width={248}
                  height={112}
                  className="translate-x-[25%] translate-y-[25%] scale-[150%]"
                />
              </div>
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
};

export default CheckInPage;
