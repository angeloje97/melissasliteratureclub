import { ThemeState, themeActions } from "./theme";
import { Dispatch } from "react";
import { themeState } from "./theme";
import { CaseReducerActions } from "@reduxjs/toolkit";

export const setLightMode = (lightMode: boolean) => {
  return (dispatch) => {
    dispatch(
      themeActions.update({
        currentTheme: themeState(lightMode),
        lightMode: lightMode,
      })
    );
  };
};
