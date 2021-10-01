// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EssentialIconsRightArrowIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function EssentialIconsRightArrowIcon(
  props: EssentialIconsRightArrowIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
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
          "M10.195 4.471a.667.667 0 01.943-.942l4 4c.26.26.26.682 0 .942l-4 4a.667.667 0 11-.943-.942l2.862-2.862H1.341A.67.67 0 01.667 8a.67.67 0 01.674-.667h11.716l-2.862-2.862z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default EssentialIconsRightArrowIcon;
/* prettier-ignore-end */
