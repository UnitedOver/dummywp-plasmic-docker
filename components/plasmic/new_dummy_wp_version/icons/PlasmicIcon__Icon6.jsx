// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon6Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g data-name={"Group 305"}>
        <rect
          data-name={"Rectangle 68"}
          width={"24"}
          height={"24"}
          rx={"8"}
          fill={"currentColor"}
        ></rect>
      </g>
    </svg>
  );
}

export default Icon6Icon;
/* prettier-ignore-end */
