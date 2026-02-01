// src/screens/ChapterOverviewScreen.tsx
// --------------------------------------------------
// CHAPTER OVERVIEW SCREEN
//
// Purpose:
// Shows list of sections for selected chapter:
//
// - INTRODUCTION
// - KEY POINTS
// - MCQs
// - EXERCISE 1, 2, 3...
//
// Exercise buttons navigate to ExerciseHubScreen
// with chapterId, chapterName and exerciseNumber.
//
// Header & Footer are handled globally by ScreenWrapper.
// --------------------------------------------------

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
import { JiguuColors, Spacing, Typography } from "@/constants/theme";

import { RootStackParamList } from "@/navigation/RootStackNavigator";

import {
  getChapterContent,
  ChapterSection,
} from "@/data/chaptersContent";

type RouteProps = RouteProp<RootStackParamList, "ChapterOverview">;

function ChapterOverviewScreen() {
  const route = useRoute<RouteProps>();
  const navigation = useNavigation();

  const { chapterId, chapterName } = route.params;

  const content = getChapterContent(chapterId);

  const handlePress = (item: ChapterSection) => {
    if (item.type === "exercise") {
      navigation.navigate(
        "ExerciseHub" as never,
        {
          chapterId,
          chapterName,
          exerciseNumber: item.exerciseNumber,
        } as never
      );
    }
  };

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
