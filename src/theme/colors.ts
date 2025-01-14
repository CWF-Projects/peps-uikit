import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#c20205",
  primaryBright: "#c20205",
  primaryDark: "#c20205",
  secondary: "#8c0104",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#f1f0f0",
  backgroundDisabled: "#E9EAEB",
  contrast: "#0b2b27",
  invertedContrast: "#FFFFFF",
  input: "#ebf4ea",
  tertiary: "#EFF4F5",
  text: "#8c0104",
  textDisabled: "#BDC2C4",
  textSubtle: "#1e5951",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#c20205",
  background: "#343135",
  backgroundDisabled: "#28a392",
  contrast: "#FFFFFF",
  invertedContrast: "#0d4039",
  input: "#0098A1",
  primaryDark: "#0098A1",
  tertiary: "#28a392",
  text: "#FFFFFF",
  textDisabled: "#cccccc",
  textSubtle: "#c9c4d4",
  borderColor: "#28a392",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #c20205 0%, #8c0104 100%)",
  },
};
