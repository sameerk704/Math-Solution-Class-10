import { Platform } from "react-native";

export const JiguuColors = {
  background: "#1A1A2E",
  surface: "#252538",
  surfaceLight: "#303045",
  border: "#3B3B52",
  
  algebra: "#FF6B6B",
  trigonometry: "#FFA726",
  geometry: "#00BCD4",
  newsEvents: "#7C4DFF",
  quickNotes: "#26A69A",
  
  accent1: "#00D4FF",
  accent2: "#FF6B9D",
  accent3: "#7C4DFF",
  accent4: "#00E676",
  
  textPrimary: "#FFFFFF",
  textSecondary: "#A0A0B0",
  textOnColor: "#FFFFFF",
};

const tintColorLight = JiguuColors.algebra;
const tintColorDark = "#818CF8";

export const Colors = {
  light: {
    text: JiguuColors.textPrimary,
    buttonText: JiguuColors.textOnColor,
    tabIconDefault: JiguuColors.textSecondary,
    tabIconSelected: tintColorLight,
    link: JiguuColors.accent1,
    backgroundRoot: JiguuColors.background,
    backgroundDefault: JiguuColors.surface,
    backgroundSecondary: JiguuColors.surfaceLight,
    backgroundTertiary: JiguuColors.border,
  },
  dark: {
    text: "#ECEDEE",
    buttonText: "#FFFFFF",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
    link: "#818CF8",
    backgroundRoot: "#1A1A2E",
    backgroundDefault: "#252538",
    backgroundSecondary: "#303045",
    backgroundTertiary: "#3B3B52",
  },
};

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  "2xl": 24,
  "3xl": 32,
  "4xl": 40,
  "5xl": 48,
  inputHeight: 48,
  buttonHeight: 56,
};

export const BorderRadius = {
  xs: 8,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 30,
  "2xl": 40,
  "3xl": 50,
  full: 9999,
};

export const Typography = {
  logo: {
    fontSize: 28,
    lineHeight: 36,
    fontWeight: "700" as const,
    fontFamily: "Nunito_700Bold",
  },
  h1: {
    fontSize: 32,
    lineHeight: 40,
    fontWeight: "700" as const,
    fontFamily: "Nunito_700Bold",
  },
  h2: {
    fontSize: 28,
    lineHeight: 36,
    fontWeight: "700" as const,
    fontFamily: "Nunito_700Bold",
  },
  h3: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "600" as const,
    fontFamily: "Nunito_600SemiBold",
  },
  h4: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: "600" as const,
    fontFamily: "Nunito_600SemiBold",
  },
  button: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: "600" as const,
    fontFamily: "Nunito_600SemiBold",
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "400" as const,
    fontFamily: "Nunito_400Regular",
  },
  small: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "400" as const,
    fontFamily: "Nunito_400Regular",
  },
  caption: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "400" as const,
    fontFamily: "Nunito_400Regular",
  },
  link: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "400" as const,
    fontFamily: "Nunito_400Regular",
  },
};

export const Fonts = Platform.select({
  ios: {
    sans: "Nunito_400Regular",
    serif: "ui-serif",
    rounded: "Nunito_400Regular",
    mono: "ui-monospace",
  },
  default: {
    sans: "Nunito_400Regular",
    serif: "serif",
    rounded: "Nunito_400Regular",
    mono: "monospace",
  },
  web: {
    sans: "Nunito_400Regular, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "Nunito_400Regular, 'SF Pro Rounded', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
