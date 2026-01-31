import React, { memo, useMemo } from "react";
import { StyleSheet, View, Image } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { JiguuColors, Typography } from "@/constants/theme";

const jiguuLogoImage = require("../../assets/images/jiguu-logo.png");

interface JiguuLogoProps {
  showSubtitle?: boolean;
  size?: "small" | "medium" | "large";
}

export const JiguuLogo = memo(function JiguuLogo({ showSubtitle = false, size = "medium" }: JiguuLogoProps) {
  const { logoWidth, logoHeight } = useMemo(() => ({
    logoWidth: size === "small" ? 160 : size === "medium" ? 200 : 240,
    logoHeight: size === "small" ? 64 : size === "medium" ? 80 : 96,
  }), [size]);

  return (
    <View style={styles.container}>
      <Image
        source={jiguuLogoImage}
        style={[styles.logo, { width: logoWidth, height: logoHeight }]}
        resizeMode="contain"
      />
      {showSubtitle ? (
        <ThemedText style={styles.subtitle}>Math Formula Guide</ThemedText>
      ) : null}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    marginBottom: -16,
  },
  subtitle: {
    ...Typography.body,
    color: JiguuColors.textSecondary,
    fontSize: 15,
    fontWeight: "500",
    marginTop: -6,
  },
});
