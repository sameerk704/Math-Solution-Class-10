// src/screens/SolutionScreen.tsx
// --------------------------------------------------
// SOLUTION SCREEN
//
// Displays:
// - Question text
// - Step-by-step solution
// - Final answer
//
// Params:
// - chapterId
// - chapterName
// - exerciseNumber
// - questionNumber
// - partId
// --------------------------------------------------

import React, { memo } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ThemedText } from "@/components/ThemedText";

import { RootStackParamList } from "@/navigation/RootStackNavigator";
import {
  getSolutionForPart,
} from "@/data/chapterSolutions";

import { JiguuColors, Spacing, Typography } from "@/constants/theme";

type RouteProps = RouteProp<
  RootStackParamList,
  "Solution"
>;

function SolutionScreen() {
  const route = useRoute<RouteProps>();

  const {
    chapterId,
    chapterName,
    exerciseNumber,
    questionNumber,
    partId,
  } = route.params;

  const solution = getSolutionForPart(
    chapterId,
    partId
  );

  return (
    <ScreenWrapper showBackButton>
      <View style={styles.container}>
        <ThemedText style={styles.title}>
          Ex {exerciseNumber} — Q{questionNumber} {partId}
        </ThemedText>

        {!solution ? (
          <ThemedText style={styles.empty}>
            Solution not added yet.
          </ThemedText>
        ) : (
          <>
            <View style={styles.card}>
              <ThemedText style={styles.question}>
                {solution.questionText}
              </ThemedText>
            </View>

            <FlatList
              data={solution.steps}
              keyExtractor={(item) => item.id}
              renderItem={({ item, index }) => (
                <View style={styles.step}>
                  <ThemedText style={styles.stepNo}>
                    Step {index + 1}
                  </ThemedText>
                  <ThemedText style={styles.stepText}>
                    {item.text}
                  </ThemedText>
                </View>
              )}
            />

            <View style={styles.answerBox}>
              <ThemedText style={styles.answerTitle}>
                Final Answer
              </ThemedText>
              <ThemedText style={styles.answerText}>
                {solution.finalAnswer}
              </ThemedText>
            </View>
          </>
        )}
      </View>
    </ScreenWrapper>
  );
}

export default memo(SolutionScreen);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Spacing.xl,
    paddingBottom: 120,
  },

  title: {
    ...Typography.h3,
    textAlign: "center",
    marginBottom: Spacing.lg,
  },

  empty: {
    textAlign: "center",
    color: JiguuColors.textSecondary,
  },

  card: {
    backgroundColor: JiguuColors.surface,
    padding: Spacing.lg,
    borderRadius: 16,
    marginBottom: Spacing.lg,
  },

  question: {
    ...Typography.body,
    fontWeight: "600",
  },

  step: {
    backgroundColor: JiguuColors.surfaceLight,
    padding: Spacing.md,
    borderRadius: 12,
    marginBottom: Spacing.sm,
  },

  stepNo: {
    fontWeight: "700",
    marginBottom: 4,
  },

  stepText: {
    ...Typography.body,
  },

  answerBox: {
    backgroundColor: "#E8F5E9",
    padding: Spacing.lg,
    borderRadius: 16,
    marginTop: Spacing.lg,
  },

  answerTitle: {
    fontWeight: "700",
    marginBottom: 4,
  },

  answerText: {
    ...Typography.body,
  },
});
