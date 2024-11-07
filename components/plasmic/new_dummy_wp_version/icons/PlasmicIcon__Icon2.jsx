// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 60 60"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g data-name={"Group 340"}>
        <g data-name={"Group 339"} transform={"translate(-960 -64)"}>
          <circle
            data-name={"Ellipse 4"}
            cx={"30"}
            cy={"30"}
            r={"30"}
            transform={"translate(960 64)"}
            fill={"#fef5f4"}
          ></circle>

          <g data-name={"Group 338"} fill={"#fc573b"}>
            <path
              data-name={"Path 72"}
              d={
                "M1004.222 96.185h-28.444a1.9 1.9 0 01-1.778-2 1.9 1.9 0 011.778-2h28.444a1.9 1.9 0 011.778 2 1.9 1.9 0 01-1.778 2z"
              }
            ></path>

            <path
              data-name={"Path 71"}
              d={
                "M998.333 86.926h-16.666a1.856 1.856 0 01-1.667-2 1.856 1.856 0 011.667-2h16.666a1.856 1.856 0 011.667 2 1.856 1.856 0 01-1.667 2z"
              }
              opacity={".5"}
            ></path>

            <path
              data-name={"Path 73"}
              d={
                "M998.333 105.445h-16.666a1.856 1.856 0 01-1.667-2 1.856 1.856 0 011.667-2h16.666a1.856 1.856 0 011.667 2 1.856 1.856 0 01-1.667 2z"
              }
              opacity={".5"}
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default Icon2Icon;
/* prettier-ignore-end */
