import { ColorSchemeName, useColorScheme } from "react-native";
import { DarkTheme, LightTheme, Theme } from "../utils/themes/Theme";
import { useState } from "react";

export default function useTheme(): Theme {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState<ColorSchemeName>(colorScheme);

  if (theme == "dark") {
    return { colors: DarkTheme, setTheme: setTheme, theme: "dark" };
  } else {
    return { colors: LightTheme, setTheme: setTheme, theme: "light" };
  }
}
