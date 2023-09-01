import { useSelector } from "react-redux";
import { RootState } from "~/store";
import { ColorSet } from "~/store/theme";

export enum ThemeTarget {
  Color = "color",
  Background = "background-color",
  Border = "border-color",
}

const useThemeStyle = () => {
  const currentTheme = useSelector(
    (state: RootState) => state.theme.currentTheme
  );

  if (!currentTheme) {
    throw new Error(
      "Current Theme is undefined. Check if the component is a child of the provider for the Redux store"
    );
  }

  return (target: ThemeTarget, colorKey: keyof ColorSet) => {
    return { [target.toString()]: currentTheme[colorKey] };
  };
};

export default useThemeStyle;
