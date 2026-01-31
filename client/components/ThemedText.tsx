import { memo, useMemo } from "react";
import { Text, type TextProps } from "react-native";

import { useTheme } from "@/hooks/useTheme";
import { Typography } from "@/constants/theme";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: "h1" | "h2" | "h3" | "h4" | "body" | "small" | "link";
};

export const ThemedText = memo(function ThemedText({
  style,
  lightColor,
  darkColor,
  type = "body",
  ...rest
}: ThemedTextProps) {
  const { theme, isDark } = useTheme();

  const color = useMemo(() => {
    if (isDark && darkColor) {
      return darkColor;
    }
    if (!isDark && lightColor) {
      return lightColor;
    }
    if (type === "link") {
      return theme.link;
    }
    return theme.text;
  }, [isDark, darkColor, lightColor, type, theme.link, theme.text]);

  const typeStyle = useMemo(() => {
    switch (type) {
      case "h1":
        return Typography.h1;
      case "h2":
        return Typography.h2;
      case "h3":
        return Typography.h3;
      case "h4":
        return Typography.h4;
      case "body":
        return Typography.body;
      case "small":
        return Typography.small;
      case "link":
        return Typography.link;
      default:
        return Typography.body;
    }
  }, [type]);

  return (
    <Text style={[{ color }, typeStyle, style]} {...rest} />
  );
});
