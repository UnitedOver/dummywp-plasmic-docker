// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: eojHsTxh2CznYQUhCcvLfa
// Component: Ou4WpcxmNsUe
import * as React from "react";
import {
  PlasmicLink as PlasmicLink__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { useScreenVariants as useScreenVariantsngPcOWd604O } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: NGPcOWd-604O/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: eojHsTxh2CznYQUhCcvLfa/projectcss
import sty from "./PlasmicDummyWpFooter.module.css"; // plasmic-import: Ou4WpcxmNsUe/css

createPlasmicElementProxy;

export const PlasmicDummyWpFooter__VariantProps = new Array();

export const PlasmicDummyWpFooter__ArgProps = new Array();

const $$ = {};

function PlasmicDummyWpFooter__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );
  const $props = {
    ...args,
    ...variants
  };
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsngPcOWd604O()
  });
  return (
    <div
      data-plasmic-name={"footer"}
      data-plasmic-override={overrides.footer}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.footer
      )}
    >
      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text___15Dxa
        )}
      >
        <React.Fragment>
          <React.Fragment>{"Made with "}</React.Fragment>
          <span
            className={"plasmic_default__all plasmic_default__span"}
            style={{ color: "#FF0000" }}
          >
            {"\u2764"}
          </span>
          <React.Fragment>{" by Humans on \ud83c\udf0e"}</React.Fragment>
        </React.Fragment>
      </div>
      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__lnCcc
        )}
      >
        <React.Fragment>
          <span
            className={"plasmic_default__all plasmic_default__span"}
            style={{ color: "var(--token-KV2lUUouMBk-)" }}
          >
            {"A "}
          </span>
          <React.Fragment>{""}</React.Fragment>
          {
            <PlasmicLink__
              data-plasmic-name={"link"}
              data-plasmic-override={overrides.link}
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                projectcss.plasmic_default__inline,
                sty.link
              )}
              href={"https://unitedover.com/"}
              platform={"react"}
            >
              <React.Fragment>
                <span
                  className={"plasmic_default__all plasmic_default__span"}
                  style={{ color: "var(--token-OHS4W3jM4QS0)" }}
                >
                  {"UnitedOver, LLC"}
                </span>
              </React.Fragment>
            </PlasmicLink__>
          }

          <React.Fragment>{""}</React.Fragment>
          <span
            className={"plasmic_default__all plasmic_default__span"}
            style={{ color: "var(--token-KV2lUUouMBk-)" }}
          >
            {" Product"}
          </span>
        </React.Fragment>
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  footer: ["footer", "link"],
  link: ["link"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicDummyWpFooter__ArgProps,
          internalVariantPropNames: PlasmicDummyWpFooter__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicDummyWpFooter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "footer") {
    func.displayName = "PlasmicDummyWpFooter";
  } else {
    func.displayName = `PlasmicDummyWpFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicDummyWpFooter = Object.assign(
  // Top-level PlasmicDummyWpFooter renders the root element
  makeNodeComponent("footer"),
  {
    // Helper components rendering sub-elements
    link: makeNodeComponent("link"),
    // Metadata about props expected for PlasmicDummyWpFooter
    internalVariantProps: PlasmicDummyWpFooter__VariantProps,
    internalArgProps: PlasmicDummyWpFooter__ArgProps
  }
);

export default PlasmicDummyWpFooter;
/* prettier-ignore-end */