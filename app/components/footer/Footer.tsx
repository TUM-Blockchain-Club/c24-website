import React from "react";
import classNames from "classnames";
import munich from "@/public/munich.png";
import confLogo from "@/public/logos/c24-wordmark.svg";
import tbcLogo from "@/public/logos/tbc-wordmark.svg";
import Image from "next/image";
import { Text } from "@/app/components/text";
import { Link } from "@/app/components/link";

type FooterElement = React.ElementRef<"footer">;
export type FooterProps = React.ComponentPropsWithoutRef<"footer">;

export const Footer = React.forwardRef<FooterElement, FooterProps>(
  (props, ref) => {
    const { className, ...restProps } = props;
    return (
      <footer
        className={classNames(
          className,
          "flex flex-col lg:block w-full relative min-h-[500px] z-10",
        )}
        {...restProps}
      >
        <div
          className={"flex justify-center py-6 px-6 md:px-12 lg:px-24 z-20"}
        >
          <div className={"flex justify-between max-w-7xl w-full"}>
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
            </div>
            <div
              className={
                "flex flex-col lg:flex-row h-full justify-start lg:justify-center gap-8 items-end lg:items-start"
              }
            >
              <Text asChild>
                <Link href={"mailto:relations@tum-blockchain.com"}>Contact</Link>
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
        <div
          className={
            "block max-w-[50%] max-h-[420px] absolute bottom-0 z-10 right-0"
          }
        >
          <Image
            src={munich}
            alt={"Munich"}
            height={420}
            className={"mix-blend-screen"}
          />
        </div>
      </footer>
    );
  },
);
Footer.displayName = "Footer";
