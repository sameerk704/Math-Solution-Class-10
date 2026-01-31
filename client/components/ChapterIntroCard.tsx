import React, { memo } from "react";
import { StyleSheet, View } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { JiguuColors, Spacing, BorderRadius, Typography } from "@/constants/theme";

interface ChapterIntroCardProps {
  intro: string;
  keyPoints: string[];
  color: string;
}

export const ChapterIntroCard = memo(function ChapterIntroCard({
  intro,
  keyPoints,
  color,
}: ChapterIntroCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.introSection}>
        <ThemedText style={styles.introText}>{intro}</ThemedText>
      </View>
      
      {keyPoints.length > 0 ? (
        <>
          <View style={[styles.keyPointsHeader, { backgroundColor: color }]}>
            <ThemedText style={styles.keyPointsTitle}>Key Points</ThemedText>
          </View>
          <View style={styles.keyPointsList}>
            {keyPoints.map((point, index) => (
              <View key={index} style={styles.keyPointItem}>
                <View style={[styles.bullet, { backgroundColor: color }]} />
                <ThemedText style={styles.keyPointText}>{point}</ThemedText>
              </View>
            ))}
          </View>
        </>
      ) : null}
    </View>
  );
});

const styles = StyleSheet.create({
  card: {
    backgroundColor: JiguuColors.surface,
    borderRadius: BorderRadius.md,
    overflow: "hidden",
    marginBottom: Spacing.xl,
  },
  introSection: {
    padding: Spacing.lg,
    backgroundColor: JiguuColors.surfaceLight,
  },
  introText: {
    ...Typography.body,
    color: JiguuColors.textPrimary,
    lineHeight: 24,
    textAlign: "justify",
  },
  keyPointsHeader: {
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.lg,
  },
  keyPointsTitle: {
    ...Typography.h4,
    color: "#FFFFFF",
    fontWeight: "700",
  },
  keyPointsList: {
    padding: Spacing.lg,
  },
  keyPointItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: Spacing.md,
  },
  bullet: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginTop: 6,
    marginRight: Spacing.md,
  },
  keyPointText: {
    ...Typography.body,
    color: JiguuColors.textSecondary,
    flex: 1,
    lineHeight: 22,
    textAlign: "justify",
  },
});
