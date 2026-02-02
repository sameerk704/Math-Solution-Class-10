// src/screens/ExerciseHubScreen.tsx
// --------------------------------------------------
// EXERCISE HUB SCREEN
//
// Purpose:
// Shows all exercises for selected chapter
// using NCERT numbering.
//
// Example:
// - Exercise 1.1
// - Exercise 1.2
//
// Navigation Params:
// - chapterId
// - chapterName
//
// Next step:
// Exercise click → QuestionListScreen
// --------------------------------------------------

import React, { memo } from "react";
import { StyleSheet, FlatList, View, Pressable } from "react-native";
import { RouteProp, useRoute, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ThemedText } from "@/components/ThemedText";

import { RootStackParamList } from "@/navigation/RootStackNavigator";
import { getChapterExercises, Exercise } from "@/data/chaptersContent";

import { JiguuColors, Spacing, Typography } from "@/constants/theme";

type RouteProps = RouteProp<RootStackParamList, "ExerciseHub">;

type NavProp = NativeStackNavigationProp<RootStackParamList>;

function ExerciseHubScreen() {
  const route = useRoute<RouteProps>();
  const navigation = useNavigation<NavProp>();

  const { chapterId, chapterName } = route.params;

  const exercises = getChapterExercises(chapterId);

  return (
    <ScreenWrapper showBackButton>
      <View style={styles.container}>
        <ThemedText style={styles.title}>{chapterName}</ThemedText>

        <FlatList
          data={exercises}
          keyExtractor={(item) => item.number}
          renderItem={({ item }) => (
            <Pressable
              style={styles.card}
              onPress={() =>
                navigation.navigate("QuestionList", {
                  chapterId,
                  chapterName,
                  exerciseNumber: item.number,
                })
              }
            >
              <ThemedText style={styles.cardText}>
                Exercise {item.number}
              </ThemedText>
            </Pressable>
          )}
        />
      </View>
    </ScreenWrapper>
  );
}

export default memo(ExerciseHubScreen);

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

  cardText: {
    ...Typography.body,
    fontWeight: "600",
  },
});
