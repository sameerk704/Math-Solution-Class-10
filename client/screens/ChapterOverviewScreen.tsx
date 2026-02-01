// src/screens/ChapterOverviewScreen.tsx
// -----------------------------------------------------------------------------
// HUB SCREEN after chapter selection.
//
// Shows:
// - INTRODUCTION
// - KEY POINTS
// - MCQs
// - Exercise buttons (dynamic)
//
// All navigation passes chapterId + chapterName.
// -----------------------------------------------------------------------------

import React, { memo } from "react";
import { StyleSheet, View, ScrollView, Pressable } from "react-native";
import { RouteProp, useRoute, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ThemedText } from "@/components/ThemedText";
import { JiguuColors, Spacing, Typography } from "@/constants/theme";

import { RootStackParamList } from "@/navigation/RootStackNavigator";
import { getChapterContent } from "@/data/chaptersContent";

type RouteProps = RouteProp<
  RootStackParamList,
  "ChapterOverview"
>;

type NavProp = NativeStackNavigationProp<RootStackParamList>;

function ChapterOverviewScreen() {
  const route = useRoute<RouteProps>();
  const navigation = useNavigation<NavProp>();

  const { chapterId, chapterName } = route.params;

  const chapter = getChapterContent(chapterId);

  if (!chapter) {
    return (
      <ScreenWrapper showBackButton>
        <View style={styles.center}>
          <ThemedText>Chapter data missing.</ThemedText>
        </View>
      </ScreenWrapper>
    );
  }

  return (
    <ScreenWrapper showBackButton>
      <ScrollView contentContainerStyle={styles.container}>
        <ThemedText style={styles.title}>{chapterName}</ThemedText>

        <SectionButton
          label="INTRODUCTION"
          onPress={() =>
            navigation.navigate("Intro", { chapterId, chapterName })
          }
        />

        <SectionButton
          label="KEY POINTS"
          onPress={() =>
            navigation.navigate("KeyPoints", { chapterId, chapterName })
          }
        />

        <SectionButton
          label="MCQs"
          onPress={() =>
            navigation.navigate("MCQs", { chapterId, chapterName })
          }
        />

        {chapter.exercises.map((ex) => (
          <SectionButton
            key={ex.number}
            label={EXERCISE ${ex.number}}
            onPress={() =>
              navigation.navigate("Exercise", {
                chapterId,
                chapterName,
                exerciseNumber: ex.number,
              })
            }
          />
        ))}
      </ScrollView>
    </ScreenWrapper>
  );
}

export default memo(ChapterOverviewScreen);

/* -------------------------------------------------------------------------- */

function SectionButton({
  label,
  onPress,
}: {
  label: string;
  onPress: () => void;
}) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <ThemedText style={styles.cardText}>{label}</ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Spacing.xl,
    paddingBottom: 140,
  },

  title: {
    ...Typography.h3,
    textAlign: "center",
    marginBottom: Spacing.xl,
  },

  card: {
    backgroundColor: JiguuColors.surface,
    paddingVertical: Spacing.lg,
    borderRadius: 16,
    marginBottom: Spacing.md,
  },

  cardText: {
    ...Typography.body,
    textAlign: "center",
    fontWeight: "600",
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
