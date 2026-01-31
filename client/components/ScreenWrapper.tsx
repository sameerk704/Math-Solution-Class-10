import React, { ReactNode, memo } from "react";
import { StyleSheet, View } from "react-native";

import { StaticHeader } from "@/components/StaticHeader";
import { NavigationButtons } from "@/components/NavigationButtons";
import { CreatorCredit } from "@/components/CreatorCredit";
import { JiguuColors } from "@/constants/theme";

interface ScreenWrapperProps {
  children: ReactNode;
  showBackButton?: boolean;
}

export const ScreenWrapper = memo(function ScreenWrapper({ children, showBackButton = false }: ScreenWrapperProps) {
  return (
    <View style={styles.container}>
      <StaticHeader />
      {showBackButton ? <NavigationButtons /> : null}
      <View style={styles.content}>{children}</View>
      <CreatorCredit />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: JiguuColors.background,
  },
  content: {
    flex: 1,
  },
});
