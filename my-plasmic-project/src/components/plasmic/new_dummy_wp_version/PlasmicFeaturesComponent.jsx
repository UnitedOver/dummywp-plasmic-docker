// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: eojHsTxh2CznYQUhCcvLfa
// Component: z6M5ypOYrVfI
import * as React from "react";
import {
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  hasVariant
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { useScreenVariants as useScreenVariantsngPcOWd604O } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: NGPcOWd-604O/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: eojHsTxh2CznYQUhCcvLfa/projectcss
import sty from "./PlasmicFeaturesComponent.module.css"; // plasmic-import: z6M5ypOYrVfI/css
import FeatureStarSvgIcon from "./icons/PlasmicIcon__FeatureStarSvg"; // plasmic-import: QlSsU1e6MJsJ/icon

createPlasmicElementProxy;

export const PlasmicFeaturesComponent__VariantProps = new Array();

export const PlasmicFeaturesComponent__ArgProps = new Array(
  "listLoop",
  "featureHeading",
  "featureSubHeading",
  "featureText"
);

const $$ = {};

function PlasmicFeaturesComponent__RenderFunc(props) {
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
    <Stack__
      as={"div"}
      data-plasmic-name={"featuresSection"}
      data-plasmic-override={overrides.featuresSection}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.featuresSection,
        "img"
      )}
    >
      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__cLgvY
        )}
      >
        <React.Fragment>
          {(() => {
            try {
              return $props.featureHeading;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return "Features";
              }
              throw e;
            }
          })()}
        </React.Fragment>
      </div>
      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__lnxef,
          hasVariant(globalVariants, "screen", "bp1145")
            ? "feature-heading"
            : undefined
        )}
      >
        <React.Fragment>
          {(() => {
            try {
              return $props.featureSubHeading;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return "Features";
              }
              throw e;
            }
          })()}
        </React.Fragment>
      </div>
      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__uuUa
        )}
      >
        <React.Fragment>
          {(() => {
            try {
              return $props.featureText;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return "";
              }
              throw e;
            }
          })()}
        </React.Fragment>
      </div>
      <Stack__
        as={"div"}
        data-plasmic-name={"planLists"}
        data-plasmic-override={overrides.planLists}
        hasGap={true}
        className={classNames(projectcss.all, sty.planLists)}
      >
        {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
          (() => {
            try {
              return $props.listLoop;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return [];
              }
              throw e;
            }
          })()
        ).map((__plasmic_item_0, __plasmic_idx_0) => {
          const currentItem = __plasmic_item_0;
          const currentIndex = __plasmic_idx_0;
          return (
            <Stack__
              as={"div"}
              data-plasmic-name={"listItem"}
              data-plasmic-override={overrides.listItem}
              hasGap={true}
              className={classNames(projectcss.all, sty.listItem)}
              key={currentIndex}
            >
              <FeatureStarSvgIcon
                data-plasmic-name={"svg"}
                data-plasmic-override={overrides.svg}
                className={classNames(projectcss.all, sty.svg)}
                role={"img"}
              />

              <div
                data-plasmic-name={"listText"}
                data-plasmic-override={overrides.listText}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.listText
                )}
              >
                <React.Fragment>
                  {(() => {
                    try {
                      return currentItem;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return "Enter text";
                      }
                      throw e;
                    }
                  })()}
                </React.Fragment>
              </div>
            </Stack__>
          );
        })}
      </Stack__>
    </Stack__>
  );
}

const PlasmicDescendants = {
  featuresSection: [
    "featuresSection",
    "planLists",
    "listItem",
    "svg",
    "listText"
  ],

  planLists: ["planLists", "listItem", "svg", "listText"],
  listItem: ["listItem", "svg", "listText"],
  svg: ["svg"],
  listText: ["listText"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicFeaturesComponent__ArgProps,
          internalVariantPropNames: PlasmicFeaturesComponent__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicFeaturesComponent__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "featuresSection") {
    func.displayName = "PlasmicFeaturesComponent";
  } else {
    func.displayName = `PlasmicFeaturesComponent.${nodeName}`;
  }
  return func;
}

export const PlasmicFeaturesComponent = Object.assign(
  // Top-level PlasmicFeaturesComponent renders the root element
  makeNodeComponent("featuresSection"),
  {
    // Helper components rendering sub-elements
    planLists: makeNodeComponent("planLists"),
    listItem: makeNodeComponent("listItem"),
    svg: makeNodeComponent("svg"),
    listText: makeNodeComponent("listText"),
    // Metadata about props expected for PlasmicFeaturesComponent
    internalVariantProps: PlasmicFeaturesComponent__VariantProps,
    internalArgProps: PlasmicFeaturesComponent__ArgProps
  }
);

export default PlasmicFeaturesComponent;
/* prettier-ignore-end */