// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconArrowIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconArrowIcon(props: IconArrowIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 36 36"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M21.026 7.06a1.125 1.125 0 10-1.552 1.63l8.63 8.185H5.625a1.125 1.125 0 000 2.25h22.443l-8.594 8.185a1.125 1.125 0 101.552 1.63l9.815-9.35a2.248 2.248 0 00-.02-3.2l-9.795-9.33z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconArrowIcon;
/* prettier-ignore-end */
