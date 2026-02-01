// src/screens/IntroScreen.tsx
// ------------------------------------------------------------------
// Displays INTRODUCTION content for a selected chapter.
// Reads offline chapter data from chaptersContent.ts
// using chapterId passed via navigation params.
// ------------------------------------------------------------------

import React, { memo } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ThemedText } from "@/components/ThemedText";
import { JiguuColors, Spacing, Typography } from "@/constants/theme";

import { RootStackParamList } from "@/navigation/RootStackNavigator";
import { getChapterContent } from "@/data/chaptersContent";

type RouteProps = RouteProp<RootStackParamList, "Intro">;

function IntroScreen() {
  const route = useRoute<RouteProps>();
  const { chapterId, chapterName } = route.params;

  const content = getChapterContent(chapterId);

  return (
    <ScreenWrapper showBackButton>
      <ScrollView contentContainerStyle={styles.container}>
        <ThemedText style={styles.title}>{chapterName}</ThemedText>

        <View style={styles.card}>
          <ThemedText style={styles.text}>
            {content.introductionText}
          </ThemedText>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}

export default memo(IntroScreen);

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
