"use client";

import { Link } from "@/app/components/link";
import { Text } from "@/app/components/text";
import classNames from "classnames";
import Image from "next/image";
import NextLink from "next/link";
import React, { useEffect, useState } from "react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@radix-ui/react-dropdown-menu';

type HeaderElement = React.ElementRef<"header">;
export type HeaderProps = React.ComponentPropsWithoutRef<"header"> & {
  logoUrl?: string;
};

export const Header = React.forwardRef<HeaderElement, HeaderProps>(
  (props, ref) => {
    const { className, logoUrl, ...propRest } = props;
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

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
          <nav
            className={
              "hidden sm:flex h-full justify-center gap-8 items-center"
            }
          >
            <Text asChild>
              <Link href="#manifesto">Manifesto</Link>
            </Text>
            <Text asChild>
              <Link href="#speaker">Previous Speakers</Link>
            </Text>
            <Text asChild>
              <Link href="#sponsors">Previous Sponsors</Link>
            </Text>
            <div className="cta-border py-2 px-4">
              <Text asChild>
                <Link href="#tally-open=meMOdl&tally-emoji-text=👋&tally-emoji-animation=wave">
                  Join waitlist
                </Link>
              </Text>
            </div>
          </nav>
          <div className="sm:hidden py-2 px-4">
            <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
              <DropdownMenuTrigger asChild>
                <button className="cta-border py-2 px-4">Menu</button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="cta-border bg-black shadow-lg rounded-md mt-2 mx-4">
                <DropdownMenuItem className="my-2 mx-2">
                  <Text asChild>
                    <Link href="#manifesto">Manifesto</Link>
                  </Text>
                </DropdownMenuItem>
                <DropdownMenuItem className="my-2 mx-2">
                  <Text asChild>
                    <Link href="#speaker">Previous Speakers</Link>
                  </Text>
                </DropdownMenuItem>
                <DropdownMenuItem className="my-2 mx-2">
                  <Text asChild>
                    <Link href="#sponsors">Previous Sponsors</Link>
                  </Text>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="cta-border sm:hidden py-2 px-4">
            <Text asChild>
              <Link href="#tally-open=meMOdl&tally-emoji-text=👋&tally-emoji-animation=wave">
                Join waitlist
              </Link>
            </Text>
          </div>
        </div>
      </header>
    );
  },
);
Header.displayName = "Header";
