"use client";

import React from "react";
import classNames from "classnames";

type ContainerElement = React.ElementRef<"div">;
export type ContainerProps = React.ComponentPropsWithoutRef<"div">;

export const Container = React.forwardRef<ContainerElement, ContainerProps>(
  (props, ref) => {
    const { className, ...restProps } = props;
    return (
      <div
        {...restProps}
        className={classNames(className, "px-6 md:px-12 lg:px-24")}
      ></div>
    );
  },
);
Container.displayName = "Container";
