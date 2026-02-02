// src/screens/SolutionScreen.tsx
// --------------------------------------------------
// SOLUTION SCREEN
//
// Purpose:
// Displays full worked solution for a question part.
//
// Example:
// Exercise 1.1 → Question 3 → Part (ii)
//
// Navigation Params:
// - chapterId
// - chapterName
// - exerciseNumber
// - questionNumber
// - partLabel
//
// This layer is final in the exercise flow.
//
// Future:
// - Images
// - Diagrams
// - Latex rendering
// - Step-by-step toggle
// --------------------------------------------------

import React, { memo } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ThemedText } from "@/components/ThemedText";

import { RootStackParamList } from "@/navigation/RootStackNavigator";
import { JiguuColors, Spacing, Typography } from "@/constants/theme";

type RouteProps = RouteProp<RootStackParamList, "Solution">;

function SolutionScreen() {
  const route = useRoute<RouteProps>();

  const {
    chapterName,
    exerciseNumber,
    questionNumber,
    partLabel,
  } = route.params;

  return (
    <ScreenWrapper showBackButton>
      <ScrollView contentContainerStyle={styles.container}>
        <ThemedText style={styles.title}>{chapterName}</ThemedText>

        <ThemedText style={styles.subtitle}>
          Exercise {exerciseNumber} — Question {questionNumber} {partLabel}
        </ThemedText>

        <View style={styles.card}>
          <ThemedText style={styles.solutionText}>
            Solution content will appear here.

            {"\n\n"}This section will contain:
            {"\n"}• Step-by-step derivation
            {"\n"}• Final answer
            {"\n"}• Formula references
            {"\n"}• Diagrams (later)
          </ThemedText>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}

export default memo(SolutionScreen);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Spacing.xl,
    paddingBottom: 140,
  },

  title: {
    ...Typography.h3,
    textAlign: "center",
    marginBottom: Spacing.sm,
  },

  subtitle: {
    ...Typography.body,
    textAlign: "center",
    marginBottom: Spacing.xl,
    color: JiguuColors.textSecondary,
  },

  card: {
    backgroundColor: JiguuColors.surface,
    padding: Spacing.xl,
    borderRadius: 18,
  },

  solutionText: {
    ...Typography.body,
    lineHeight: 24,
  },
});
