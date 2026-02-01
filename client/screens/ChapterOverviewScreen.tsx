// --------------------------------------------------
// ChapterOverviewScreen.tsx
// --------------------------------------------------
// Screen after chapter click.
// Shows INTRODUCTION / KEY POINTS / MCQs / EXERCISES.
// --------------------------------------------------

import React, { memo } from "react";
import { StyleSheet, View, Pressable, ScrollView } from "react-native";
import { useRoute, useNavigation, RouteProp } from "@react-navigation/native";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ThemedText } from "@/components/ThemedText";
import { JiguuColors, Spacing, Typography } from "@/constants/theme";

import { RootStackParamList } from "@/navigation/RootStackNavigator";

import { getChapterContent } from "@/data/chaptersContent";

type RouteProps = RouteProp<RootStackParamList, "ChapterOverview">;

function ChapterOverviewScreen() {
  const route = useRoute<RouteProps>();
  const navigation = useNavigation<any>();

  const { chapterId, chapterName } = route.params;

  const content = getChapterContent(chapterId);

  const sections =
    content?.sections?.length > 0
      ? content.sections
      : [
          { id: "intro", title: "INTRODUCTION", type: "introduction" },
          { id: "key", title: "KEY POINTS", type: "keypoints" },
          { id: "mcq", title: "MCQs", type: "mcqs" },
          { id: "ex1", title: "EXERCISE 1", type: "exercise", exerciseNumber: 1 },
          { id: "ex2", title: "EXERCISE 2", type: "exercise", exerciseNumber: 2 },
          { id: "ex3", title: "EXERCISE 3", type: "exercise", exerciseNumber: 3 },
        ];

  const handlePress = (section: any) => {
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

      {/* BUTTONS */}
      <ScrollView contentContainerStyle={styles.list}>
        {sections.map((item) => (
          <Pressable
            key={item.id}
            style={styles.sectionCard}
            onPress={() => handlePress(item)}
          >
            <ThemedText style={styles.sectionTitle}>
              {item.title}
            </ThemedText>
          </Pressable>
        ))}
      </ScrollView>
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
