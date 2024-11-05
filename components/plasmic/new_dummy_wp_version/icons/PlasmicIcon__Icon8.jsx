// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon8Icon(props) {
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
              "M998.642 105.656l-20.113-20.113a1.9 1.9 0 01.157-2.671 1.9 1.9 0 012.671-.157l20.113 20.113a1.9 1.9 0 01-.157 2.671 1.9 1.9 0 01-2.671.157z"
            }
          ></path>

          <path
            data-name={"Path 72"}
            d={
              "M978.529 102.828l20.113-20.113a1.9 1.9 0 012.671.157 1.9 1.9 0 01.157 2.671l-20.113 20.113a1.9 1.9 0 01-2.671-.157 1.9 1.9 0 01-.157-2.671z"
            }
          ></path>
        </g>
      </g>
    </svg>
  );
}

export default Icon8Icon;
/* prettier-ignore-end */
