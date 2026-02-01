// src/screens/ChapterOverviewScreen.tsx
// --------------------------------------------------
// CHAPTER OVERVIEW SCREEN
//
// Purpose:
// Shows chapter menu:
//
// - INTRODUCTION
// - KEY POINTS
// - MCQs
// - EXERCISES
//
// User taps section → navigates to respective screen.
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

import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ThemedText } from "@/components/ThemedText";

import {
  JiguuColors,
  Spacing,
  Typography,
  BorderRadius,
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

type NavProps = NativeStackNavigationProp<
  RootStackParamList
>;

function ChapterOverviewScreen() {
  const route = useRoute<RouteProps>();
  const navigation = useNavigation<NavProps>();

  const { chapterId, chapterName } = route.params;

  const content = getChapterContent(chapterId);

  const handlePress = (section: ChapterSection) => {
    if (section.type === "mcqs") {
      navigation.navigate("MCQs", {
        chapterId,
        chapterName,
      });
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
            onPress={() => handlePress(item)}
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
    padding: Spacing.lg,
    borderRadius: BorderRadius.md,
    marginBottom: Spacing.md,
  },

  sectionTitle: {
    ...Typography.body,
    fontWeight: "600",
    textAlign: "center",
  },
});
