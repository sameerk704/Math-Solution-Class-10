// src/screens/ChapterOverviewScreen.tsx
// --------------------------------------------------
// CHAPTER OVERVIEW SCREEN
//
// Displays main chapter menu:
// - Introduction
// - Key Points
// - MCQs
// - Exercises Hub
// --------------------------------------------------

import React from "react";
import { StyleSheet, View, Pressable } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ThemedText } from "@/components/ThemedText";
import { Spacing, JiguuColors, Typography } from "@/constants/theme";
import { RootStackParamList } from "@/navigation/RootStackNavigator";

type RouteProps = RouteProp<RootStackParamList, "ChapterOverview">;
type NavProps = NativeStackNavigationProp<RootStackParamList>;

export default function ChapterOverviewScreen() {
  const route = useRoute<RouteProps>();
  const navigation = useNavigation<NavProps>();

  const { chapterId, chapterName } = route.params;

  return (
    <ScreenWrapper showBackButton>
      <View style={styles.container}>
        <ThemedText style={styles.title}>{chapterName}</ThemedText>

        {[
          { label: "INTRODUCTION", screen: "Intro" },
          { label: "KEY POINTS", screen: "KeyPoints" },
          { label: "MCQs", screen: "MCQs" },
          { label: "EXERCISES", screen: "ExerciseHub" },
        ].map((item) => (
          <Pressable
            key={item.label}
            style={styles.button}
            onPress={() =>
              navigation.navigate(item.screen as any, {
                chapterId,
                chapterName,
              })
            }
          >
            <ThemedText style={styles.buttonText}>
              {item.label}
            </ThemedText>
          </Pressable>
        ))}
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: Spacing.xl,
  },
  title: {
    ...Typography.h3,
    textAlign: "center",
    marginBottom: Spacing.xl,
  },
  button: {
    backgroundColor: JiguuColors.surface,
    padding: Spacing.lg,
    borderRadius: 16,
    marginBottom: Spacing.md,
  },
  buttonText: {
    ...Typography.body,
    fontWeight: "600",
    textAlign: "center",
  },
});
