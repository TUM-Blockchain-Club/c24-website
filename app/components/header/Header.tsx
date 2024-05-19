"use client";

import React, { useEffect, useState } from "react";
import classNames from "classnames";
import Image from "next/image";
import { Text } from "@/app/components/text";
import { Button } from "@/app/components/button";
import { Link } from "@/app/components/link";
import NextLink from "next/link";

type HeaderElement = React.ElementRef<"header">;
export type HeaderProps = React.ComponentPropsWithoutRef<"header"> & {
  logoUrl?: string;
};

export const Header = React.forwardRef<HeaderElement, HeaderProps>(
  (props, ref) => {
    const { className, logoUrl, ...propRest } = props;
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return (
      <header
        {...propRest}
        className={classNames(
          className,
          "fixed z-[9999] w-full py-4 flex justify-center items-center px-6 md:px-12 lg:px-24 transition-all duration-300",
          {
            "dark:bg-black/50 backdrop-blur-md": isScrolled,
            "bg-transparent": !isScrolled,
          },
        )}
        ref={ref}
      >
        <div className={"max-w-7xl w-full flex justify-between items-center"}>
          <div className={"w-11 lg:w-16"}>
            <NextLink href={"/"}>
              <Image
                src={logoUrl || "/logos/tbc-conference-logo.png"}
                alt={"TUM Blockchain Conference 2024 Logo"}
                className={"transition-all duration-300"}
                width={isScrolled ? 36 : 64}
                height={isScrolled ? 36 : 64}
              />
            </NextLink>
          </div>
          <nav className={"lg:flex h-full justify-center gap-8 items-center"}>
            {false && (
              <Text asChild className={"hidden lg:flex"}>
                <Link href="#sponsor">Sponsor</Link>
              </Text>
            )}
            <Text asChild className={"hidden lg:flex"}>
              <Link href="#manifesto">Manifesto</Link>
            </Text>
            <Text asChild className={"hidden lg:flex"}>
              <Link href="#speaker">Speaker</Link>
            </Text>
          </nav>
        </div>
      </header>
    );
  },
);
Header.displayName = "Header";
