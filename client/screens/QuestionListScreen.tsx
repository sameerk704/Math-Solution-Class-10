// src/screens/QuestionListScreen.tsx
// --------------------------------------------------
// QUESTION LIST SCREEN
//
// Purpose:
// Shows all questions for a selected exercise.
//
// Currently:
// - Placeholder list generated safely.
// - Real data will be injected later from
//   chapterQuestions.ts.
//
// Params:
// - chapterId
// - chapterName
// - exerciseNumber
//
// Next:
// Question → Parts Screen
// --------------------------------------------------

import React, { memo } from "react";
import { View, StyleSheet, FlatList, Pressable } from "react-native";
import { RouteProp, useRoute, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ThemedText } from "@/components/ThemedText";

import { RootStackParamList } from "@/navigation/RootStackNavigator";

import { JiguuColors, Spacing, Typography } from "@/constants/theme";

type RouteProps = RouteProp<RootStackParamList, "QuestionList">;

type NavProp = NativeStackNavigationProp<RootStackParamList>;

function QuestionListScreen() {
  const route = useRoute<RouteProps>();
  const navigation = useNavigation<NavProp>();

  const { chapterName, exerciseNumber } = route.params;

  // TEMP SAFE QUESTIONS
  const questions = Array.from({ length: 5 }).map((_, i) => ({
    id: q-${i + 1},
    label: Question ${i + 1},
  }));

  return (
    <ScreenWrapper showBackButton>
      <View style={styles.container}>
        <ThemedText style={styles.title}>
          Exercise {exerciseNumber}
        </ThemedText>

        <FlatList
          data={questions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Pressable
              style={styles.card}
              onPress={() =>
                console.log("Future → Question Parts Screen")
              }
            >
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

export default memo(QuestionListScreen);

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
