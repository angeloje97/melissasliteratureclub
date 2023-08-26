import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type ColorSet = {
  primary: string;
  secondary: string;
  link: string;
  warning: string;
  error: string;
};

export interface ThemeState {
  currentTheme?: ColorSet;
  lightMode?: boolean;
}

const lightMode: ColorSet = {
  primary: "",
  secondary: "",
  link: "",
  warning: "",
  error: "",
};

const darkMode: ColorSet = {
  primary: "",
  secondary: "",
  link: "",
  warning: "",
  error: "",
};

const initialState: ThemeState = {
  currentTheme: lightMode,
  lightMode: true,
};

export const themeState = (isLightMode: boolean) => {
  return isLightMode ? lightMode : darkMode;
};

const themeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    update(state, action: PayloadAction<ThemeState>) {
      const payload = action.payload;
      const originalState: ThemeState = { ...state, ...payload };
      state = originalState;
    },

    toggle(state) {
      const nextLightMode = !state.lightMode;

      state = {
        ...state,
        lightMode: nextLightMode,
        currentTheme: themeState(nextLightMode),
      };
    },
  },
});

export const themeActions = themeSlice.actions;

export default themeSlice.reducer;
