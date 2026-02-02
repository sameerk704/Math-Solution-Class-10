// src/screens/QuestionPartsScreen.tsx
// --------------------------------------------------
// QUESTION PARTS SCREEN
//
// Purpose:
// Displays parts of a selected question.
//
// Example:
// Exercise 1.1 → Question 2
// Shows:
// - (i)
// - (ii)
// - (iii)
//
// Navigation Params:
// - chapterId
// - chapterName
// - exerciseNumber
// - questionNumber
//
// Next Step:
// Clicking a part will open SolutionScreen.
// --------------------------------------------------

import React, { memo } from "react";
import { StyleSheet, View, FlatList, Pressable } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ThemedText } from "@/components/ThemedText";

import { RootStackParamList } from "@/navigation/RootStackNavigator";
import { JiguuColors, Spacing, Typography } from "@/constants/theme";

type RouteProps = RouteProp<RootStackParamList, "QuestionParts">;

const PARTS = ["(i)", "(ii)", "(iii)", "(iv)", "(v)"];

function QuestionPartsScreen() {
  const route = useRoute<RouteProps>();

  const {
    chapterName,
    exerciseNumber,
    questionNumber,
  } = route.params;

  return (
    <ScreenWrapper showBackButton>
      <View style={styles.container}>
        <ThemedText style={styles.title}>
          Exercise {exerciseNumber}
        </ThemedText>

        <ThemedText style={styles.subtitle}>
          Question {questionNumber}
        </ThemedText>

        <FlatList
          data={PARTS}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Pressable style={styles.card}>
              <ThemedText style={styles.cardText}>
                Part {item}
              </ThemedText>
            </Pressable>
          )}
        />
      </View>
    </ScreenWrapper>
  );
}

export default memo(QuestionPartsScreen);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Spacing.xl,
    paddingBottom: 120,
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
    paddingVertical: Spacing.lg,
    borderRadius: 16,
    marginBottom: Spacing.md,
    alignItems: "center",
  },

  cardText: {
    ...Typography.body,
    fontWeight: "600",
  },
});
