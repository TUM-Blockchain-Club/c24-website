"use client";

import React, { useEffect, useRef, useState } from "react";
import useSWR from "swr";
import jsQR, { QRCode } from "jsqr";
import { Container } from "@/components/container";
import { Text } from "@/components/text";
import { EventbriteAttendee } from "@/app/api/check-in/route";

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
  const [attendeeData, setAttendeeData] = useState<EventbriteAttendee | null>(
    null,
  );
  const [error, setError] = useState<string>("");
  const [passcode, setPasscode] = useState<string>("");

  const {
    data,
    isLoading,
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
            setQrCodeData(code.data);
          }
        }
      }
      requestAnimationFrame(detectQRCode);
    };

    detectQRCode();
  }, []);

  return (
    <div className={"flex justify-center"}>
      <main className={"w-full max-w-7xl pt-[25px] lg:pt-0 z-20 pb-40"}>
        <Container>
          <div className="mt-[100px] md:mt-[20vh] z-10 max-w-3xl">
            <div className="lg:flex items-center">
              <Text textType={"sub_hero"} className="text-gradient text-left">
                Check In
              </Text>
            </div>
            <div className="mt-20 flex">
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
                  {qrCodeData && (
                    <div>
                      <p>Scanned Barcode: {qrCodeData}</p>
                      {data && (
                        <Text
                          className={
                            data.wasAlreadyCheckedIn
                              ? "text-yellow-500"
                              : "text-green-500"
                          }
                        >
                          {data.wasAlreadyCheckedIn
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
              <div></div>
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
};

export default CheckInPage;
