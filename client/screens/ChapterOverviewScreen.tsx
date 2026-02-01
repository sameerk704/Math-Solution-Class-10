/**
 * --------------------------------------------------
 * FILE: ChapterOverviewScreen.tsx
 *
 * PURPOSE:
 * Shows all main sections of a chapter:
 * - Introduction
 * - Key Points
 * - MCQs
 * - Exercises (dynamic numbers)
 *
 * Handles navigation to:
 * - Intro screen
 * - KeyPoints screen
 * - MCQs screen
 * - Exercise screen
 *
 * Chapter id + name + exercise number
 * are passed through navigation params.
 * --------------------------------------------------
 */

import React, { memo } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Pressable,
} from "react-native";
import {
  useRoute,
  RouteProp,
  useNavigation,
} from "@react-navigation/native";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ThemedText } from "@/components/ThemedText";
import {
  JiguuColors,
  Spacing,
  Typography,
} from "@/constants/theme";

import { RootStackParamList } from "@/navigation/RootStackNavigator";

import {
  getChapterContent,
  ChapterSection,
} from "@/data/chaptersContent";

type RouteProps = RouteProp<
  RootStackParamList,
  "ChapterOverview"
>;

function ChapterOverviewScreen() {
  const route = useRoute<RouteProps>();
  const navigation = useNavigation<any>();

  const { chapterId, chapterName } = route.params;

  const content = getChapterContent(chapterId);

  function handleSectionPress(item: ChapterSection) {
    if (item.type === "introduction") {
      navigation.navigate("Intro", {
        chapterId,
        chapterName,
      });
      return;
    }

    if (item.type === "keypoints") {
      navigation.navigate("KeyPoints", {
        chapterId,
        chapterName,
      });
      return;
    }

    if (item.type === "mcqs") {
      navigation.navigate("MCQs", {
        chapterId,
        chapterName,
      });
      return;
    }

    if (item.type === "exercise") {
      navigation.navigate("Exercise", {
        chapterId,
        chapterName,
        exerciseNumber: item.exerciseNumber,
      });
      return;
    }
  }

  return (
    <ScreenWrapper showBackButton>
      <View style={styles.header}>
        <ThemedText style={styles.title}>
          {chapterName}
        </ThemedText>
      </View>

      <FlatList
        data={content.sections}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => handleSectionPress(item)}
            style={styles.sectionCard}
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
    fontWeight: "700",
    textAlign: "center",
  },

  list: {
    paddingHorizontal: Spacing.xl,
    paddingBottom: 120,
  },

  sectionCard: {
    backgroundColor: JiguuColors.surface,
    paddingVertical: Spacing.lg,
    paddingHorizontal: Spacing.lg,
    borderRadius: 18,
    marginBottom: Spacing.md,
  },

  sectionTitle: {
    ...Typography.body,
    fontWeight: "600",
    textAlign: "center",
  },
});
