// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon10Icon(props) {
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

      <path
        data-name={"Path 10"}
        d={
          "M1.706 12a10.3 10.3 0 005.8 9.265L2.6 7.81A10.255 10.255 0 001.706 12zm17.243-.519a5.421 5.421 0 00-.849-2.84 4.818 4.818 0 01-1.011-2.414A1.783 1.783 0 0118.818 4.4c.046 0 .089.006.133.008A10.292 10.292 0 003.4 6.346c.242.007.469.012.662.012 1.077 0 2.743-.131 2.743-.131a.425.425 0 01.066.848s-.558.066-1.178.1l3.748 11.149 2.253-6.757-1.6-4.394c-.554-.033-1.079-.1-1.079-.1a.425.425 0 01.065-.848s1.7.131 2.711.131c1.077 0 2.743-.131 2.743-.131a.425.425 0 01.066.848s-.559.066-1.178.1l3.72 11.066 1.027-3.431a12.438 12.438 0 00.784-3.328zM12.18 12.9l-3.088 8.975a10.3 10.3 0 006.326-.164.9.9 0 01-.073-.142L12.18 12.9zm8.852-5.839a7.9 7.9 0 01.068 1.058 9.711 9.711 0 01-.783 3.687L17.175 20.9a10.3 10.3 0 003.857-13.839zM12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm0 23.45A11.45 11.45 0 1123.449 12 11.463 11.463 0 0112 23.45z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon10Icon;
/* prettier-ignore-end */
