// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function ButtonArrowSvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 52 52"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g transform={"translate(-564 -572)"}>
        <rect
          data-name={"Rectangle 259"}
          width={"52"}
          height={"52"}
          rx={"1"}
          transform={"translate(564 572)"}
          fill={"#ff8a83"}
        ></rect>

        <path
          data-name={"Path 79"}
          d={
            "M601.707 599.206l-9 9A1 1 0 01591 607.5v-8h-12a1 1 0 010-2h12v-8a1 1 0 011.707-.707l9 9a1 1 0 010 1.415z"
          }
          fill={"#f8f7f4"}
        ></path>
      </g>
    </svg>
  );
}

export default ButtonArrowSvgIcon;
/* prettier-ignore-end */
