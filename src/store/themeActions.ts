import { AppDispatch } from ".";
import { themeActions } from "./theme";
import { themeState } from "./theme";

export const setLightMode = (lightMode: boolean) => {
  return (dispatch: AppDispatch) => {
    dispatch(
      themeActions.update({
        currentTheme: themeState(lightMode),
        lightMode: lightMode,
      })
    );
  };
};
