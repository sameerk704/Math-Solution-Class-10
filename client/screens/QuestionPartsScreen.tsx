// src/screens/QuestionPartsScreen.tsx
// --------------------------------------------------
// QUESTION PARTS SCREEN
//
// Shows:
// Ex 1.1 Q1(i)
// Ex 1.1 Q1(ii)
//
// Next:
// Part → Solution screen
// --------------------------------------------------

import React, { memo } from "react";
import { View, StyleSheet, FlatList, Pressable } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ThemedText } from "@/components/ThemedText";

import { RootStackParamList } from "@/navigation/RootStackNavigator";
import {
  getQuestionsForExercise,
} from "@/data/chapterQuestions";

import { JiguuColors, Spacing, Typography } from "@/constants/theme";

type RouteProps = RouteProp<
  RootStackParamList,
  "QuestionParts"
>;

function QuestionPartsScreen() {
  const route = useRoute<RouteProps>();

  const {
    chapterId,
    exerciseNumber,
    questionNumber,
  } = route.params;

  const questions = getQuestionsForExercise(
    chapterId,
    exerciseNumber
  );

  const question = questions.find(
    (q) => q.number === questionNumber
  );

  return (
    <ScreenWrapper showBackButton>
      <View style={styles.container}>
        <ThemedText style={styles.title}>
          Ex {exerciseNumber} — Q{questionNumber}
        </ThemedText>

        <FlatList
          data={question?.parts ?? []}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Pressable style={styles.card}>
              <ThemedText style={styles.text}>
                {item.label}
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
    marginBottom: Spacing.xl,
  },

  card: {
    backgroundColor: JiguuColors.surface,
    paddingVertical: Spacing.lg,
    borderRadius: 16,
    marginBottom: Spacing.md,
    alignItems: "center",
  },

  text: {
    ...Typography.body,
    fontWeight: "600",
  },
});
