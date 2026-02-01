/*
--------------------------------------------------
ChapterOverviewScreen.tsx

Purpose:
Shows chapter title and list of section buttons:
- Introduction
- Key Points
- MCQs
- Exercise 1/2/3...

Uses offline data from:
src/data/chaptersContent.ts

Navigates to:
- IntroScreen
- KeyPointsScreen
- MCQScreen
- ExerciseHubScreen

Header/Footer already global — this file only renders BODY.

--------------------------------------------------
*/

import React, { useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList } from "@/navigation/RootStackNavigator";
import { getChapterContent } from "@/data/chaptersContent";
import { JiguuColors } from "@/constants/theme";

type Props = NativeStackScreenProps<
  RootStackParamList,
  "ChapterOverview"
>;

export default function ChapterOverviewScreen({
  route,
  navigation,
}: Props) {
  const { chapterId, chapterName } = route.params;

  const chapterContent = useMemo(
    () => getChapterContent(chapterId),
    [chapterId]
  );

  const handlePress = (type: string, exerciseNumber?: number) => {
    if (type === "introduction") {
      navigation.navigate("Formula", {
        chapterId,
        chapterName,
        subject: "math",
      });
      return;
    }

    if (type === "keypoints") {
      navigation.navigate("Formula", {
        chapterId,
        chapterName,
        subject: "math",
      });
      return;
    }

    if (type === "mcqs") {
      navigation.navigate("MCQs", {
        chapterId,
        chapterName,
      });
      return;
    }

    if (type === "exercise") {
      navigation.navigate("ExerciseHub", {
        chapterId,
        chapterName,
        exerciseNumber,
      });
    }
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.chapterTitle}>{chapterName}</Text>

      {chapterContent.sections.map((section) => (
        <TouchableOpacity
          key={section.id}
          style={styles.button}
          onPress={() =>
            handlePress(section.type, section.exerciseNumber)
          }
        >
          <Text style={styles.buttonText}>{section.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
  },

  chapterTitle: {
    fontSize: 26,
    fontWeight: "700",
    color: JiguuColors.textPrimary,
    textAlign: "center",
    marginBottom: 30,
  },

  button: {
    backgroundColor: JiguuColors.card,
    borderRadius: 18,
    paddingVertical: 18,
    marginBottom: 14,
    alignItems: "center",
  },

  buttonText: {
    color: JiguuColors.textPrimary,
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
});
