/**
 * ------------------------------------------------------------
 * FILE: IntroScreen.tsx
 * ------------------------------------------------------------
 * PURPOSE:
 * Displays INTRODUCTION content for a selected chapter.
 *
 * - Receives chapterId & chapterName via navigation params.
 * - Fetches offline chapter data from chaptersContent.ts.
 * - Shows introduction section inside a styled card.
 * - Uses ScreenWrapper for global header/footer.
 * - Back button enabled.
 *
 * NOTE:
 * Actual chapter-wise introduction text will be added later.
 * Currently shows placeholder so flow can be tested.
 * ------------------------------------------------------------
 */

import React, { memo } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
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

  const introSection = content.sections.find(
    (s) => s.type === "introduction"
  );

  return (
    <ScreenWrapper showBackButton>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <ThemedText style={styles.title}>{chapterName}</ThemedText>

        <View style={styles.card}>
          <ThemedText style={styles.text}>
            {introSection
              ? Introduction content for "${chapterName}" will be added here.
              : "No introduction available."}
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
    marginBottom: Spacing.xl,
    fontWeight: "700",
  },
  card: {
    backgroundColor: JiguuColors.surface,
    padding: Spacing.lg,
    borderRadius: 14,
  },
  text: {
    ...Typography.body,
    color: JiguuColors.textPrimary,
    lineHeight: 22,
  },
});
