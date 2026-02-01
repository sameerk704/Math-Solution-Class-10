// src/screens/ExerciseHubScreen.tsx
// --------------------------------------------------
// EXERCISE HUB SCREEN
//
// Purpose:
// This screen appears after user taps on
// "EXERCISE 1 / 2 / 3" from ChapterOverview.
//
// Shows 3 main sections inside BODY only:
//
// 1) QUESTIONS
// 2) EXAMPLES
// 3) THEOREMS
//
// Header + Footer are handled globally by ScreenWrapper.
//
// Navigation (next steps later):
// - QUESTIONS  -> QuestionListScreen
// - EXAMPLES   -> ExampleListScreen
// - THEOREMS   -> TheoremListScreen
// --------------------------------------------------

import React, { memo } from "react";
import { StyleSheet, View, Pressable } from "react-native";
import { useRoute } from "@react-navigation/native";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ThemedText } from "@/components/ThemedText";
import { JiguuColors, Spacing, Typography } from "@/constants/theme";

type RouteParams = {
  chapterId: string;
  chapterName: string;
  exerciseNumber: number;
};

function ExerciseHubScreen() {
  const route = useRoute();
  const { chapterId, chapterName, exerciseNumber } =
    route.params as RouteParams;

  return (
    <ScreenWrapper showBackButton>
      <View style={styles.container}>
        <ThemedText style={styles.title}>
          {chapterName}
        </ThemedText>

        <ThemedText style={styles.subtitle}>
          Exercise {exerciseNumber}
        </ThemedText>

        {/* QUESTIONS */}
        <Pressable style={styles.card}>
          <ThemedText style={styles.cardText}>QUESTIONS</ThemedText>
        </Pressable>

        {/* EXAMPLES */}
        <Pressable style={styles.card}>
          <ThemedText style={styles.cardText}>EXAMPLES</ThemedText>
        </Pressable>

        {/* THEOREMS */}
        <Pressable style={styles.card}>
          <ThemedText style={styles.cardText}>THEOREMS</ThemedText>
        </Pressable>
      </View>
    </ScreenWrapper>
  );
}

export default memo(ExerciseHubScreen);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Spacing.xl,
    paddingTop: Spacing.lg,
  },

  title: {
    ...Typography.h3,
    textAlign: "center",
    marginBottom: 4,
  },

  subtitle: {
    ...Typography.body,
    textAlign: "center",
    opacity: 0.7,
    marginBottom: Spacing.xl,
  },

  card: {
    backgroundColor: JiguuColors.surface,
    paddingVertical: Spacing.xl,
    borderRadius: 18,
    alignItems: "center",
    marginBottom: Spacing.lg,
  },

  cardText: {
    ...Typography.h4,
    fontWeight: "600",
  },
});
