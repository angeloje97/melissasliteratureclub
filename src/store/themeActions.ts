import { themeActions } from "./theme";
import { Dispatch } from "react";
import { themeState } from "./theme";

export const setLightMode = (lightMode: boolean) => {
  return async (dispatch: Dispatch<any>) => {
    dispatch(
      themeActions.update({
        currentTheme: themeState(lightMode),
        lightMode: lightMode,
      })
    );
  };
};
