import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";

import { RootStackParamList } from "@/navigation/RootStackNavigator";
import { getChapterContent } from "@/data/chaptersContent";
import { JiguuColors } from "@/constants/theme";

type RouteProps = RouteProp<RootStackParamList, "ChapterOverview">;

export default function ChapterOverviewScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute<RouteProps>();

  const { chapterId, chapterName } = route.params;

  const chapter = getChapterContent(chapterId);

  const sections = [
    {
      id: "intro",
      title: "Introduction",
      type: "intro",
    },
    {
      id: "keypoints",
      title: "Key Points",
      type: "keypoints",
    },
    {
      id: "mcqs",
      title: "MCQs",
      type: "mcqs",
    },

    // ---- Exercises dynamic ----
    ...chapter.exercises.map((ex) => ({
      id: `exercise-${ex.number}`,
      title: `Exercise ${ex.number}`,
      type: "exercise",
      number: ex.number,
    })),
  ];

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
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
                subject: "math",
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
    </ScrollView>
  );
}

// --------------------------------------------------

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    paddingBottom: 40,
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
