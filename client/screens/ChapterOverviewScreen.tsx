/*
--------------------------------------------------
ChapterOverviewScreen.tsx

Shows section buttons for a chapter:
Intro / Key Points / MCQs / Exercises.

Data source:
src/data/chaptersContent.ts

Safe-guarded against undefined data.

--------------------------------------------------
*/

import React from "react";
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

export default function ChapterOverviewScreen({ route, navigation }: Props) {
  const { chapterId, chapterName } = route.params;

  const chapterContent = getChapterContent(chapterId);

  const sections = chapterContent?.sections ?? [];

  const handlePress = (
    type: string,
    exerciseNumber?: number
  ) => {
    if (type === "introduction") {
      navigation.navigate("Intro", {
        chapterId,
        chapterName,
      });
      return;
    }

    if (type === "keypoints") {
      navigation.navigate("KeyPoints", {
        chapterId,
        chapterName,
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

      {sections.map((section) => (
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

      {sections.length === 0 && (
        <Text style={styles.emptyText}>
          No sections found for this chapter.
        </Text>
      )}
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
  },

  emptyText: {
    color: "#888",
    textAlign: "center",
    marginTop: 40,
  },
});
