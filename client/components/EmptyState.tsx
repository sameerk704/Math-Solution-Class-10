import React, { memo } from "react";
import { StyleSheet, View, Image, ImageSourcePropType } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { Spacing, JiguuColors, Typography } from "@/constants/theme";

interface EmptyStateProps {
  image?: ImageSourcePropType;
  title: string;
  message: string;
}

export const EmptyState = memo(function EmptyState({ image, title, message }: EmptyStateProps) {
  return (
    <View style={styles.container}>
      {image ? (
        <Image source={image} style={styles.image} resizeMode="contain" />
      ) : null}
      <ThemedText style={styles.title}>{title}</ThemedText>
      <ThemedText style={styles.message}>{message}</ThemedText>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Spacing["3xl"],
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: Spacing["2xl"],
  },
  title: {
    ...Typography.h4,
    color: JiguuColors.textPrimary,
    marginBottom: Spacing.sm,
    textAlign: "center",
  },
  message: {
    ...Typography.body,
    color: JiguuColors.textSecondary,
    textAlign: "center",
    lineHeight: 22,
  },
});
