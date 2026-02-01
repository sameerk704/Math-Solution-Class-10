// src/screens/ExerciseScreen.tsx
// --------------------------------------------------
// EXERCISE SCREEN
//
// Purpose:
// Displays selected exercise of chapter.
//
// Receives:
// - chapterId
// - chapterName
// - exerciseNumber
//
// Currently placeholder screen.
// --------------------------------------------------

import React from "react";
import { View, StyleSheet } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ThemedText } from "@/components/ThemedText";
import { RootStackParamList } from "@/navigation/RootStackNavigator";
import { Spacing, Typography } from "@/constants/theme";

type RouteProps = RouteProp<RootStackParamList, "Exercise">;

export default function ExerciseScreen() {
  const route = useRoute<RouteProps>();

  const { chapterName, exerciseNumber } = route.params;

  return (
    <ScreenWrapper showBackButton>
      <View style={styles.container}>
        <ThemedText style={styles.title}>
          {chapterName}
        </ThemedText>

        <ThemedText>
          Exercise {exerciseNumber} coming soon...
        </ThemedText>
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
    marginBottom: Spacing.lg,
  },
});
