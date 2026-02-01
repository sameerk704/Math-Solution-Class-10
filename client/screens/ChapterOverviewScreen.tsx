// src/screens/ChapterOverviewScreen.tsx
// --------------------------------------------------
// CHAPTER OVERVIEW SCREEN
//
// Purpose:
// Displays all sections inside a chapter:
//
// - Introduction
// - Key Points
// - MCQs
// - Exercise 1 / 2 / 3 ...
//
// Data Source:
// Uses getChapterContent() from chaptersContent.ts
//
// Safety:
// - All arrays are guaranteed non-null.
// - No runtime crashes on map/length.
//
// --------------------------------------------------

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";

import { RootStackParamList } from "@/navigation/RootStackNavigator";
import { getChapterContent } from "@/data/chaptersContent";
import { JiguuColors } from "@/constants/theme";

type RouteProps = RouteProp<RootStackParamList, "ChapterOverview">;

export default function ChapterOverviewScreen() {
  const navigation = useNavigation();
  const route = useRoute<RouteProps>();

  const { chapterId, chapterName } = route.params;

  const chapter = getChapterContent(chapterId);

  const sections = [
    { id: "intro", title: "Introduction", type: "intro" },
    { id: "kp", title: "Key Points", type: "keypoints" },
    { id: "mcq", title: "MCQs", type: "mcqs" },
    ...chapter.exercises.map((ex) => ({
      id: ex-${ex.number},
      title: Exercise ${ex.number},
      type: "exercise",
      number: ex.number,
    })),
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{chapterName.toUpperCase()}</Text>

      {sections.map((section) => (
        <TouchableOpacity
          key={section.id}
          style={styles.card}
          onPress={() => {
            if (section.type === "intro") {
              navigation.navigate("Formula", {
                chapterId,
                chapterName,
                subject: "math" as any,
              });
            }

            if (section.type === "keypoints") {
              navigation.navigate("QuickNotes");
            }

            if (section.type === "mcqs") {
              navigation.navigate("MCQs", {
                chapterId,
                chapterName,
              });
            }

            if (section.type === "exercise") {
              navigation.navigate("QuickNotes");
            }
          }}
        >
          <Text style={styles.cardText}>{section.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

// --------------------------------------------------

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: JiguuColors.background,
  },

  heading: {
    fontSize: 26,
    color: JiguuColors.textPrimary,
    textAlign: "center",
    marginBottom: 40,
    fontWeight: "700",
  },

  card: {
    backgroundColor: JiguuColors.surface,
    paddingVertical: 18,
    borderRadius: 18,
    marginBottom: 18,
  },

  cardText: {
    color: JiguuColors.textPrimary,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
  },
});
