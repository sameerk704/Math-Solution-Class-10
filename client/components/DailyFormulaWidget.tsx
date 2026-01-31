import React, { memo, useState, useCallback } from "react";
import { StyleSheet, View, Pressable } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { BorderRadius, Spacing, Typography } from "@/constants/theme";

import {
  getClass10AllChapters,
  getFormulasForChapter,
  Formula,
} from "@/data/formulas";

const WIDGET_HEIGHT = 56;

const gradientColors = [
  { start: "#6366F1", end: "#8B5CF6", glow: "#A78BFA" },
  { start: "#EC4899", end: "#F43F5E", glow: "#FB7185" },
  { start: "#0EA5E9", end: "#06B6D4", glow: "#22D3EE" },
  { start: "#10B981", end: "#14B8A6", glow: "#2DD4BF" },
  { start: "#F59E0B", end: "#EF4444", glow: "#FCD34D" },
  { start: "#8B5CF6", end: "#D946EF", glow: "#E879F9" },
  { start: "#3B82F6", end: "#6366F1", glow: "#818CF8" },
  { start: "#F97316", end: "#F59E0B", glow: "#FBBF24" },
];

function getAllFormulas(): Formula[] {
  const chapters = getClass10AllChapters();

  const all: Formula[] = [];

  chapters.forEach((chapter) => {
    const formulas = getFormulasForChapter(chapter.id);

    formulas.forEach((f) => {
      if (
        !f.title.toLowerCase().includes("what is") &&
        f.formula.length < 80
      ) {
        all.push(f);
      }
    });
  });

  return all;
}

function getRandomFormula(allFormulas: Formula[]) {
  const randomIndex = Math.floor(Math.random() * allFormulas.length);
  const colorIndex = Math.floor(Math.random() * gradientColors.length);

  return {
    formula: allFormulas[randomIndex],
    colorIndex,
  };
}

export const DailyFormulaWidget = memo(function DailyFormulaWidget() {
  const [allFormulas] = useState(() => getAllFormulas());

  const [currentData, setCurrentData] = useState(() =>
    getRandomFormula(allFormulas)
  );

  const colors = gradientColors[currentData.colorIndex];

  const handlePress = useCallback(() => {
    setCurrentData(getRandomFormula(allFormulas));
  }, [allFormulas]);

  return (
    <Pressable
      testID="daily-formula-widget"
      style={[styles.container, { backgroundColor: colors.start }]}
      onPress={handlePress}
    >
      <View
        style={[styles.glowCircle1, { backgroundColor: colors.glow }]}
      />
      <View
        style={[styles.glowCircle2, { backgroundColor: colors.end }]}
      />

      <View style={styles.textContainer}>
        <ThemedText style={styles.formulaTitle} numberOfLines={1}>
          {currentData.formula.title}
        </ThemedText>

        <ThemedText
          style={styles.formulaText}
          numberOfLines={1}
          adjustsFontSizeToFit
          minimumFontScale={0.7}
        >
          {currentData.formula.formula.split("\n")[0]}
        </ThemedText>
      </View>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  container: {
    borderRadius: BorderRadius.sm,
    height: WIDGET_HEIGHT,
    paddingHorizontal: Spacing.md,
    overflow: "hidden",
    position: "relative",
    justifyContent: "center",
  },
  glowCircle1: {
    position: "absolute",
    top: -20,
    right: -20,
    width: 60,
    height: 60,
    borderRadius: 30,
    opacity: 0.3,
  },
  glowCircle2: {
    position: "absolute",
    bottom: -15,
    left: 40,
    width: 40,
    height: 40,
    borderRadius: 20,
    opacity: 0.25,
  },
  textContainer: {
    alignItems: "center",
  },
  formulaTitle: {
    ...Typography.caption,
    color: "rgba(255,255,255,0.85)",
    fontWeight: "600",
    textAlign: "center",
  },
  formulaText: {
    ...Typography.body,
    color: "#FFFFFF",
    fontFamily: "Nunito_700Bold",
    textAlign: "center",
  },
});
