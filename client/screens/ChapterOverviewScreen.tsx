/**
 * File: ChapterOverviewScreen.tsx
 *
 * Purpose:
 * Shows overview buttons for a chapter:
 * - Introduction
 * - Key Points
 * - MCQs
 * - Exercises (dynamic based on chapter)
 */

import React, { memo } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Pressable,
} from "react-native";
import { useRoute, RouteProp, useNavigation } from "@react-navigation/native";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ThemedText } from "@/components/ThemedText";
import { JiguuColors, Spacing, Typography } from "@/constants/theme";
import { RootStackParamList } from "@/navigation/RootStackNavigator";

import { getChapterContent } from "@/data/chaptersContent";

type RouteProps = RouteProp<
  RootStackParamList,
  "ChapterOverview"
>;

function ChapterOverviewScreen() {
  const route = useRoute<RouteProps>();
  const navigation = useNavigation();

  const { chapterId, chapterName } = route.params ?? {};

  const content = getChapterContent?.(chapterId);

  // 🛑 SAFETY — prevents crash
  if (!content) {
    return (
      <ScreenWrapper showBackButton>
        <ThemedText>No chapter content found.</ThemedText>
      </ScreenWrapper>
    );
  }

  const sections = content.sections ?? [];

  return (
    <ScreenWrapper showBackButton>
      {/* HEADER */}
      <View style={styles.header}>
        <ThemedText style={styles.title}>
          {chapterName}
        </ThemedText>
      </View>

      {/* BUTTON LIST */}
      <FlatList
        data={sections}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <Pressable
            style={styles.sectionCard}
            onPress={() =>
              navigation.navigate(
                item.route as never,
                {
                  chapterId,
                  chapterName,
                  sectionId: item.id,
                } as never
              )
            }
          >
            <ThemedText style={styles.sectionTitle}>
              {item.title}
            </ThemedText>
          </Pressable>
        )}
      />
    </ScreenWrapper>
  );
}

export default memo(ChapterOverviewScreen);

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    marginBottom: Spacing.xl,
  },

  title: {
    ...Typography.h3,
    fontWeight: "600",
    textAlign: "center",
  },

  list: {
    paddingHorizontal: Spacing.xl,
    paddingBottom: 120,
  },

  sectionCard: {
    backgroundColor: JiguuColors.surface,
    paddingVertical: Spacing.xl,
    paddingHorizontal: Spacing.lg,
    borderRadius: 18,
    marginBottom: Spacing.lg,
  },

  sectionTitle: {
    ...Typography.body,
    fontWeight: "600",
    textAlign: "center",
  },
});
