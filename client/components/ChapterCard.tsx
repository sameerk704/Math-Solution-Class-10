import React, { memo, useState, useCallback } from "react";
import { StyleSheet, Pressable, View, Platform } from "react-native";
import * as Haptics from "expo-haptics";

import { ThemedText } from "@/components/ThemedText";
import { BorderRadius, Spacing, JiguuColors, Typography } from "@/constants/theme";

interface ChapterCardProps {
  number: number;
  name: string;
  color?: string;
  onPress?: () => void;
  testID?: string;
}

export const ChapterCard = memo(function ChapterCard({ number, name, color = JiguuColors.algebra, onPress, testID }: ChapterCardProps) {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = useCallback(() => {
    setIsPressed(true);
  }, []);

  const handlePressOut = useCallback(() => {
    setIsPressed(false);
  }, []);

  const handlePress = useCallback(() => {
    if (Platform.OS !== "web") {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    onPress?.();
  }, [onPress]);

  return (
    <Pressable
      testID={testID}
      onPress={handlePress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={[styles.card, isPressed && styles.cardPressed]}
    >
      <View style={[styles.numberContainer, { backgroundColor: color }]}>
        <ThemedText style={styles.number}>{number}</ThemedText>
      </View>
      <ThemedText style={styles.name} numberOfLines={2}>
        {name}
      </ThemedText>
      <View style={styles.chevronIcon}>
        <View style={styles.chevronTop} />
        <View style={styles.chevronBottom} />
      </View>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: JiguuColors.surface,
    borderRadius: BorderRadius.xs,
    paddingVertical: Spacing.lg,
    paddingHorizontal: Spacing.lg,
  },
  cardPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },
  numberContainer: {
    width: 32,
    height: 32,
    borderRadius: BorderRadius.xs,
    alignItems: "center",
    justifyContent: "center",
    marginRight: Spacing.md,
  },
  number: {
    ...Typography.small,
    fontWeight: "700",
    color: JiguuColors.textOnColor,
  },
  name: {
    ...Typography.body,
    flex: 1,
    color: JiguuColors.textPrimary,
    fontWeight: "600",
  },
  chevronIcon: {
    width: 12,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  chevronTop: {
    position: "absolute",
    top: 2,
    width: 8,
    height: 2,
    backgroundColor: JiguuColors.textSecondary,
    borderRadius: 1,
    transform: [{ rotate: "45deg" }],
  },
  chevronBottom: {
    position: "absolute",
    bottom: 2,
    width: 8,
    height: 2,
    backgroundColor: JiguuColors.textSecondary,
    borderRadius: 1,
    transform: [{ rotate: "-45deg" }],
  },
});
