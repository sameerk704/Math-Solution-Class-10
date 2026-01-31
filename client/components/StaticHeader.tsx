import React, { memo } from "react";
import { StyleSheet, View, useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { JiguuLogo } from "@/components/JiguuLogo";
import { Spacing, JiguuColors } from "@/constants/theme";

export const StaticHeader = memo(function StaticHeader() {
  const insets = useSafeAreaInsets();
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  return (
    <View style={[
      styles.container, 
      { 
        paddingTop: isLandscape ? insets.top + Spacing.xs : insets.top + Spacing.md,
        paddingBottom: isLandscape ? Spacing.sm : Spacing.xs,
      }
    ]}>
      <JiguuLogo size={isLandscape ? "small" : "large"} showSubtitle={true} />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: JiguuColors.background,
    paddingHorizontal: Spacing.lg,
    alignItems: "center",
    justifyContent: "flex-end",
    borderBottomWidth: 1,
    borderBottomColor: JiguuColors.border,
  },
});
