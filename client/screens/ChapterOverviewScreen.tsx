// --------------------------------------------------
// ChapterOverviewScreen.tsx
// --------------------------------------------------
// This screen appears after selecting a chapter.
// It lists INTRODUCTION, KEY POINTS, MCQs and
// dynamic EXERCISE buttons.
// Data comes from chaptersContent.ts
// --------------------------------------------------

import React, { memo } from "react";
import { StyleSheet, View, FlatList, Pressable } from "react-native";
import { useRoute, useNavigation, RouteProp } from "@react-navigation/native";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ThemedText } from "@/components/ThemedText";
import { JiguuColors, Spacing, Typography } from "@/constants/theme";

import { RootStackParamList } from "@/navigation/RootStackNavigator";

import {
  getChapterContent,
  ChapterSection,
} from "@/data/chaptersContent";

type RouteProps = RouteProp<RootStackParamList, "ChapterOverview">;

function ChapterOverviewScreen() {
  const route = useRoute<RouteProps>();
  const navigation = useNavigation<any>();

  const { chapterId, chapterName } = route.params;

  const content = getChapterContent(chapterId);

  const handlePress = (section: ChapterSection) => {
    if (section.type === "introduction") {
      navigation.navigate("Intro", { chapterId, chapterName });
    }

    if (section.type === "keypoints") {
      navigation.navigate("KeyPoints", { chapterId, chapterName });
    }

    if (section.type === "mcqs") {
      navigation.navigate("MCQ", { chapterId, chapterName });
    }

    if (section.type === "exercise") {
      navigation.navigate("Exercise", {
        chapterId,
        chapterName,
        exerciseNumber: section.exerciseNumber,
      });
    }
  };

  return (
    <ScreenWrapper showBackButton>
      {/* HEADER */}
      <View style={styles.header}>
        <ThemedText style={styles.title}>{chapterName}</ThemedText>
      </View>

      {/* BUTTON LIST */}
      <FlatList
        data={content.sections}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <Pressable
            style={styles.sectionCard}
            onPress={() => handlePress(item)}
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
    paddingBottom: 140,
  },

  sectionCard: {
    backgroundColor: JiguuColors.surface,
    paddingVertical: Spacing.lg,
    borderRadius: 16,
    marginBottom: Spacing.md,
    alignItems: "center",
  },

  sectionTitle: {
    ...Typography.body,
    fontWeight: "600",
  },
});
