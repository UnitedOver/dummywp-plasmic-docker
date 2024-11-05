// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function FeatureStarSvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      data-name={"Feature Star"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        data-name={"Rectangle 263"}
        fill={"rgba(255,255,255,0)"}
        d={"M0 0h24v24H0z"}
      ></path>

      <path
        data-name={"Path 74"}
        d={
          "M21 12a1.269 1.269 0 01-.844 1.206l-5.1 1.854-1.854 5.1a1.286 1.286 0 01-2.411 0l-1.854-5.1-5.1-1.854a1.286 1.286 0 010-2.411l5.1-1.854 1.854-5.1a1.286 1.286 0 012.411 0l1.854 5.1 5.1 1.854A1.269 1.269 0 0121 12.001z"
        }
        fill={"#ffb6b2"}
      ></path>
    </svg>
  );
}

export default FeatureStarSvgIcon;
/* prettier-ignore-end */
