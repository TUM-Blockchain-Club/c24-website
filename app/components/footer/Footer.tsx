import { Link } from "@/app/components/link";
import { Text } from "@/app/components/text";
import confLogo from "@/public/logos/c24-wordmark.svg";
import dcLogo from "@/public/logos/discord-logo.png";
import liLogo from "@/public/logos/linkedin-logo.png";
import tbcLogo from "@/public/logos/tbc-wordmark.svg";
import telLogo from "@/public/logos/telegram-logo.png";
import xLogo from "@/public/logos/x-logo.png";
import munich from "@/public/munich.png";
import classNames from "classnames";
import Image from "next/image";
import React from "react";

type FooterElement = React.ElementRef<"footer">;
export type FooterProps = React.ComponentPropsWithoutRef<"footer">;

export const Footer = React.forwardRef<FooterElement, FooterProps>(
  (props, ref) => {
    const { className, ...restProps } = props;
    return (
      <footer
        {...restProps}
        className={classNames(
          className,
          "flex z-10 justify-center items-center justify-items-center",
        )}
        ref={ref}
      >
        <div
          className={
            "flex flex-col self-center relative min-h-[500px] w-full max-w-7xl"
          }
        >
          <div
            className={"flex justify-center py-6 px-6 md:px-12 lg:px-24 z-20"}
          >
            <div
              className={
                "flex flex-col gap-y-8 lg:flex-row justify-between w-full"
              }
            >
              <div className={"flex flex-col gap-4 items-start"}>
                <Image
                  src={confLogo}
                  alt={"TUM Blockchain Conference Logo"}
                  height={88}
                />
                <div className={"flex flex-col gap-2"}>
                  <Text textType={"small"}>Organized by</Text>
                  <Image
                    src={tbcLogo}
                    alt={"TUM Blockchain Club Logo"}
                    width={145}
                  />
                </div>
                <div className="flex space-x-4 mt-2">
                  <a
                    href="https://discord.gg/7V7KG8SESF"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={dcLogo}
                      alt={"TUM Blockchain Club Logo"}
                      width={25}
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/tum-blockchain-club/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={liLogo}
                      alt={"TUM Blockchain Club Logo"}
                      width={25}
                    />
                  </a>
                  <a
                    href="https://t.me/+6SMYu7pub0E1MGUy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={telLogo}
                      alt={"TUM Blockchain Club Logo"}
                      width={25}
                    />
                  </a>
                  <a
                    href="https://x.com/tbc_munich"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={xLogo}
                      alt={"TUM Blockchain Club Logo"}
                      width={25}
                    />
                  </a>
                </div>
              </div>
              <div
                className={
                  "flex flex-col lg:flex-row h-full justify-start lg:justify-center gap-4 lg:gap-8"
                }
              >
                <Text asChild>
                  <Link href={"mailto:relations@tum-blockchain.com"}>
                    Contact
                  </Link>
                </Text>
                <Text asChild>
                  <Link href={"https://www.tum-blockchain.com/privacy-policy"}>
                    Privacy Policy
                  </Link>
                </Text>
                <Text asChild>
                  <Link href={"https://www.tum-blockchain.com/imprint"}>
                    Impressum
                  </Link>
                </Text>
              </div>
            </div>
          </div>
          <div className={"self-end block max-w-7xl w-full h-[420px] lg:h-fit"}>
            <div className={"absolute bottom-0 z-10 right-0"}>
              <Image
                src={munich}
                alt={"Munich"}
                height={420}
                className={"mix-blend-screen"}
              />
            </div>
            <div
              className={
                "lg:absolute bottom-0 z-10 right-0 translate-x-[100%] -scale-x-[100%] hidden xl:block"
              }
            >
              <Image
                src={munich}
                alt={"Munich"}
                height={420}
                className={"mix-blend-screen"}
              />
            </div>
          </div>
        </div>
      </footer>
    );
  },
);
Footer.displayName = "Footer";
