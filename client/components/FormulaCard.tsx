import React, { memo } from "react";
import { StyleSheet, View } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { JiguuColors, Spacing, BorderRadius, Typography } from "@/constants/theme";

interface FormulaCardProps {
  title: string;
  formula: string;
  explanation?: string;
  color: string;
}

export const FormulaCard = memo(function FormulaCard({
  title,
  formula,
  explanation,
  color,
}: FormulaCardProps) {
  return (
    <View style={styles.card}>
      <View style={[styles.header, { backgroundColor: color }]}>
        <ThemedText style={styles.title}>{title}</ThemedText>
      </View>
      
      <View style={styles.formulaContainer}>
        <ThemedText style={styles.formula} selectable>
          {formula}
        </ThemedText>
      </View>

      {explanation ? (
        <View style={styles.explanationContainer}>
          <ThemedText style={styles.explanation}>
            {explanation}
          </ThemedText>
        </View>
      ) : null}
    </View>
  );
});

const styles = StyleSheet.create({
  card: {
    backgroundColor: JiguuColors.surface,
    borderRadius: BorderRadius.md,
    overflow: "hidden",
  },
  header: {
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.lg,
  },
  title: {
    ...Typography.h4,
    color: "#FFFFFF",
    fontWeight: "700",
  },
  formulaContainer: {
    backgroundColor: JiguuColors.surfaceLight,
    padding: Spacing.lg,
    marginHorizontal: Spacing.md,
    marginTop: Spacing.md,
    borderRadius: BorderRadius.xs,
  },
  formula: {
    ...Typography.body,
    color: JiguuColors.textPrimary,
    fontFamily: "Nunito_600SemiBold",
    lineHeight: 26,
    textAlign: "justify",
  },
  explanationContainer: {
    padding: Spacing.lg,
  },
  explanation: {
    ...Typography.small,
    color: JiguuColors.textSecondary,
    fontStyle: "italic",
    lineHeight: 20,
    textAlign: "justify",
  },
});
