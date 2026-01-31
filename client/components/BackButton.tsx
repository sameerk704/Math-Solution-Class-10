import React from "react";
import { StyleSheet, Pressable, Platform, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Haptics from "expo-haptics";

import { ThemedText } from "@/components/ThemedText";
import { Spacing, JiguuColors, BorderRadius } from "@/constants/theme";

export function BackButton() {
  const navigation = useNavigation();

  const handleBack = () => {
    if (Platform.OS !== "web") {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    navigation.goBack();
  };

  return (
    <Pressable
      testID="button-back"
      style={styles.container}
      onPress={handleBack}
    >
      <View style={styles.arrowIcon}>
        <View style={styles.arrowLine} />
        <View style={styles.arrowHead} />
      </View>
      <ThemedText style={styles.text}>Back</ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: JiguuColors.surface,
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.md,
    borderRadius: BorderRadius.xs,
    alignSelf: "flex-start",
    marginLeft: Spacing.lg,
    marginTop: Spacing.md,
    marginBottom: Spacing.sm,
  },
  arrowIcon: {
    width: 16,
    height: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  arrowLine: {
    position: "absolute",
    width: 12,
    height: 2,
    backgroundColor: JiguuColors.textPrimary,
    borderRadius: 1,
  },
  arrowHead: {
    position: "absolute",
    left: 0,
    width: 8,
    height: 8,
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    borderColor: JiguuColors.textPrimary,
    transform: [{ rotate: "45deg" }],
  },
  text: {
    color: JiguuColors.textPrimary,
    fontSize: 14,
    fontWeight: "600",
    marginLeft: Spacing.sm,
  },
});
