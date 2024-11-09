// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import * as React from "react";
import { createUseScreenVariants } from "@plasmicapp/react-web";

export const ScreenContext = React.createContext(
  "PLEASE_RENDER_INSIDE_PROVIDER"
);

export const useScreenVariants = createUseScreenVariants(true, {
  bp902: "(max-width:902px)",
  bp1145: "(max-width:1145px)",
  bp1260: "(max-width:1260px)",
  bp751: "(max-width:751px)",
  bp862: "(max-width:862px)",
  bp680: "(max-width:680px)",
  bp493: "(max-width:493px)",
  bp801: "(max-width:801px)",
  bp720: "(max-width:720px)",
  bp648: "(max-width:648px)",
  bp630: "(max-width:635px)",
  bp480: "(max-width:480px)",
  bp1024: "(max-width:1024px)",
  bp420: "(max-width:420px)",
  bp1245: "(max-width:1245px)",
  bp1354: "(max-width:1354px)",
  bp1050: "(max-width:1050px)",
  bp930: "(max-width:930px)",
  bp1366: "(max-width:1366px)",
  bp1118: "(max-width:1118px)",
  bp506: "(max-width:506px)",
  bp1497: "(max-width:1497px)",
  bp588: "(max-width:588px)",
  bp375: "(max-width:375px)",
});

export default ScreenContext;
/* prettier-ignore-end */
