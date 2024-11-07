// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon5Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        data-name={"Rectangle 207"}
        d={"M0 0h20v20H0z"}
        fill={"transparent"}
      ></path>

      <path
        d={
          "M10.416 13.75a.831.831 0 01-.589-.244l-5-5a.834.834 0 011.179-1.179l4.411 4.411 4.411-4.411a.834.834 0 111.179 1.179l-5 5a.831.831 0 01-.591.244z"
        }
        fill={"rgba(252,87,59,.5)"}
      ></path>
    </svg>
  );
}

export default Icon5Icon;
/* prettier-ignore-end */
