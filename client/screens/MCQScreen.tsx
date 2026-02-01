// src/screens/MCQScreen.tsx
// -----------------------------------------------------------------------------
// Displays MCQs for selected chapter.
// Uses chaptersContent.ts as offline source.
// -----------------------------------------------------------------------------

import React from "react";
import { StyleSheet, View } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ThemedText } from "@/components/ThemedText";

import { RootStackParamList } from "@/navigation/RootStackNavigator";
import { getChapterContent } from "@/data/chaptersContent";

import { JiguuColors, Spacing, Typography } from "@/constants/theme";

type RouteProps = RouteProp<RootStackParamList, "MCQs">;

export default function MCQScreen() {
  const route = useRoute<RouteProps>();
  const { chapterId, chapterName } = route.params;

  const chapter = getChapterContent(chapterId);

  const mcqs = chapter?.mcqs ?? [];

  return (
    <ScreenWrapper showBackButton>
      <View style={styles.container}>
        <ThemedText style={styles.heading}>{chapterName}</ThemedText>

        {mcqs.length === 0 && (
          <ThemedText style={styles.empty}>
            No MCQs added yet.
          </ThemedText>
        )}
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Spacing.xl,
  },

  heading: {
    ...Typography.h3,
    textAlign: "center",
    marginBottom: Spacing.lg,
  },

  empty: {
    ...Typography.body,
    textAlign: "center",
    color: JiguuColors.textSecondary,
  },
});
