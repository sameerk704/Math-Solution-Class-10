/**
 * FILE: src/screens/KeyPointsScreen.tsx
 * --------------------------------------------------
 * PURPOSE:
 * Displays the KEY POINTS section of a selected chapter.
 *
 * - Receives chapterId + chapterName from navigation
 * - Reads offline content from chaptersContent.ts
 * - Shows placeholder text for now (later real content)
 * - Uses same UI structure as IntroScreen
 * - Scrollable safe layout
 * --------------------------------------------------
 */

import React, { memo } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ThemedText } from "@/components/ThemedText";
import { JiguuColors, Spacing, Typography } from "@/constants/theme";
import { RootStackParamList } from "@/navigation/RootStackNavigator";

import { getChapterContent } from "@/data/chaptersContent";

type RouteProps = RouteProp<RootStackParamList, "KeyPoints">;

function KeyPointsScreen() {
  const route = useRoute<RouteProps>();
  const { chapterId, chapterName } = route.params;

  const content = getChapterContent(chapterId);

  const keyPointsSection = content.sections.find(
    (s) => s.type === "keypoints"
  );

  return (
    <ScreenWrapper showBackButton>
      <View style={styles.header}>
        <ThemedText style={styles.title}>{chapterName}</ThemedText>
        <ThemedText style={styles.subtitle}>KEY POINTS</ThemedText>
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.card}>
          <ThemedText style={styles.text}>
            {keyPointsSection
              ? "Key Points content coming soon..."
              : "No key points found for this chapter."}
          </ThemedText>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}

export default memo(KeyPointsScreen);

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    marginBottom: Spacing.lg,
  },

  title: {
    ...Typography.h3,
    fontWeight: "700",
  },

  subtitle: {
    marginTop: 6,
    ...Typography.body,
    opacity: 0.7,
  },

  container: {
    paddingHorizontal: Spacing.xl,
    paddingBottom: 120,
  },

  card: {
    backgroundColor: JiguuColors.surface,
    padding: Spacing.lg,
    borderRadius: 16,
  },

  text: {
    ...Typography.body,
    lineHeight: 22,
  },
});
