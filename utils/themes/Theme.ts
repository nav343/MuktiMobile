import { ColorSchemeName } from "react-native";

export const DarkTheme: ColorTheme = {
  bg: "#03001c",
  bg_inverted: "white",
  text: "white",
  text_inverted: "#03001c",
  blue: "#1597BB",
  tile: "#333446",
};

export const LightTheme: ColorTheme = {
  bg: "white",
  bg_inverted: "#03001c",
  text: "#03001c",
  text_inverted: "white",
  blue: "#2F58CD",
  tile: "#F2F2F2",
};

export interface ColorTheme {
  bg?: string;
  bg_inverted?: string;
  text?: string;
  text_inverted?: string;
  blue?: string;
  tile?: string;
}

export interface Theme {
  colors: ColorTheme;
  setTheme: React.Dispatch<React.SetStateAction<ColorSchemeName>>;
  theme: ColorSchemeName;
}
