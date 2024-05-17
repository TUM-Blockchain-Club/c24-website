import React from "react";
import classNames from "classnames";
import Image from "next/image";
import confLogo from "@/public/logos/tbc-conference-logo.png";
import { Text } from "@/app/components/text";
import { Button } from "@/app/components/button";
import { Link } from "@/app/components/link";
import NextLink from "next/link";

type HeaderElement = React.ElementRef<"header">;
export type HeaderProps = React.ComponentPropsWithoutRef<"header">;

export const Header = React.forwardRef<HeaderElement, HeaderProps>(
  (props, ref) => {
    const { className, ...propRest } = props;
    return (
      <header
        {...propRest}
        className={classNames(
          className,
          "fixed z-[9999] dark:bg-black/50 scroll:bg-black/75 w-full py-6 flex justify-center items-center px-6 md:px-12 lg:px-24 backdrop-blur-md",
        )}
        ref={ref}
      >
        <div className={"max-w-7xl w-full flex justify-between items-center"}>
          <div className={"w-11 lg:w-16"}>
            <NextLink href={"/"}>
              <Image
                src={confLogo}
                alt={"TUM Blockchain Conference 2024 Logo"}
                width={64}
                height={64}
              />
            </NextLink>
          </div>
          <nav className={"lg:flex h-full justify-center gap-8 items-center"}>
            <Text asChild className={"hidden lg:flex"}>
              <Link href="#speaker">Speaker</Link>
            </Text>
            <Text asChild className={"hidden lg:flex"}>
              <Link href="#sponsor">Sponsor</Link>
            </Text>
            <Text asChild className={"hidden lg:flex"}>
              <Link href="#manifesto">Manifesto</Link>
            </Text>
          </nav>
        </div>
      </header>
    );
  },
);
Header.displayName = "Header";
