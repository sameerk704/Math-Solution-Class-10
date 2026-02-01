// src/screens/KeyPointsScreen.tsx
// --------------------------------------------------
// KEY POINTS SCREEN
//
// Purpose:
// Displays key points for a selected chapter.
//
// Data Source:
// - Offline static data from chaptersContent.ts
//
// Navigation Params Required:
// - chapterId
// - chapterName
//
// Safety:
// - Handles missing data gracefully
// - Prevents crash if content not found
// --------------------------------------------------

import React from "react";
import { StyleSheet, View } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ThemedText } from "@/components/ThemedText";

import { JiguuColors, Spacing, Typography } from "@/constants/theme";
import { RootStackParamList } from "@/navigation/RootStackNavigator";

import { getChapterContent } from "@/data/chaptersContent";

type RouteProps = RouteProp<RootStackParamList, "KeyPoints">;

export default function KeyPointsScreen() {
  const route = useRoute<RouteProps>();

  const { chapterId, chapterName } = route.params;

  const content = getChapterContent(chapterId);

  // 🔒 SAFETY CHECK
  const keyPointsSection = content?.sections?.find(
    (s) => s.type === "keypoints"
  );

  return (
    <ScreenWrapper showBackButton>
      <View style={styles.container}>
        <ThemedText style={styles.title}>{chapterName}</ThemedText>

        {keyPointsSection ? (
          <ThemedText style={styles.text}>
            Key points content will appear here.
          </ThemedText>
        ) : (
          <ThemedText style={styles.text}>
            No key points available for this chapter yet.
          </ThemedText>
        )}
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Spacing.xl,
    paddingTop: Spacing.xl,
  },

  title: {
    ...Typography.h3,
    textAlign: "center",
    marginBottom: Spacing.xl,
  },

  text: {
    ...Typography.body,
    color: JiguuColors.textSecondary,
    textAlign: "center",
  },
});
