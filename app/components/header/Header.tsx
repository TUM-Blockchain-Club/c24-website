"use client";

import { Link } from "@/app/components/link";
import { Text } from "@/app/components/text";
import classNames from "classnames";
import Image from "next/image";
import NextLink from "next/link";
import React, { useEffect, useState } from "react";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "@/app/components/button";

type HeaderElement = React.ElementRef<"header">;
export type HeaderProps = React.ComponentPropsWithoutRef<"header"> & {
  logoUrl?: string;
};

export type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <div className={classNames("fixed inset-0 z-[9999] transition-transform transform", {
      "translate-x-0": isOpen,
      "translate-x-full": !isOpen,
    })}>
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      <div className="fixed right-0 top-0 h-full w-64 bg-black p-6 shadow-lg">
        <Cross1Icon height={25} width={25} onClick={onClose} className="mb-8"></Cross1Icon>
        <nav className="flex flex-col gap-8">
          <Text asChild>
            <Link href="#manifesto">Manifesto</Link>
          </Text>
          <Text asChild>
            <Link href="#speaker">Previous Speakers</Link>
          </Text>
          <Text asChild>
            <Link href="#sponsors">Previous Sponsors</Link>
          </Text>
        </nav>
        <Button className={"sm:hidden mt-8 mr-4"} buttonType={"cta"} data-tally-open="wAlAek" data-tally-emoji-text="👋" data-tally-emoji-animation="wave" data-tally-auto-close="2000">
            Join waitlist
        </Button>
      </div>
    </div>
  );
};

export const Header = React.forwardRef<HeaderElement, HeaderProps>(
  (props, ref) => {
    const { className, logoUrl, ...propRest } = props;
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const handleSidebarClose = () => setIsSidebarOpen(false);

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
    <>
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
            <Button buttonType={"cta"} data-tally-open="wAlAek" data-tally-emoji-text="👋" data-tally-emoji-animation="wave" data-tally-auto-close="2000">
                Join waitlist
            </Button>
          </nav>
          <div className="sm:hidden py-2 px-4">
            <HamburgerMenuIcon height={"25"} width={"25"} onClick={() => setIsSidebarOpen(true)}/>
          </div>
        </div>
      </header>
      <Sidebar isOpen={isSidebarOpen} onClose={handleSidebarClose} />
    </>
    );
  },
);
Header.displayName = "Header";
