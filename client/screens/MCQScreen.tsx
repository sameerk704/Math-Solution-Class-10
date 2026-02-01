// src/screens/MCQScreen.tsx
// --------------------------------------------------
// MCQ SCREEN
//
// Purpose:
// Displays MCQs for selected chapter.
//
// Safety:
// - mcqs is always an array.
// - Empty state handled gracefully.
// - No "length of undefined" crashes.
//
// --------------------------------------------------

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";

import { RootStackParamList } from "@/navigation/RootStackNavigator";
import { getChapterContent } from "@/data/chaptersContent";
import { JiguuColors } from "@/constants/theme";

type RouteProps = RouteProp<RootStackParamList, "MCQs">;

export default function MCQScreen() {
  const route = useRoute<RouteProps>();
  const { chapterId, chapterName } = route.params;

  const chapter = getChapterContent(chapterId);

  const mcqs = chapter.mcqs;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{chapterName}</Text>

      {mcqs.length === 0 && (
        <Text style={styles.emptyText}>No MCQs added yet.</Text>
      )}

      {mcqs.map((mcq) => (
        <View key={mcq.id} style={styles.card}>
          <Text style={styles.question}>{mcq.question}</Text>

          {mcq.options.map((opt, idx) => (
            <Text key={idx} style={styles.option}>
              {idx + 1}. {opt}
            </Text>
          ))}
        </View>
      ))}
    </View>
  );
}

// --------------------------------------------------

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: JiguuColors.background,
    padding: 20,
  },

  heading: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
    color: JiguuColors.textPrimary,
    fontWeight: "700",
  },

  emptyText: {
    textAlign: "center",
    marginTop: 40,
    color: JiguuColors.textSecondary,
    fontSize: 16,
  },

  card: {
    backgroundColor: JiguuColors.surface,
    padding: 16,
    borderRadius: 14,
    marginBottom: 16,
  },

  question: {
    color: JiguuColors.textPrimary,
    fontSize: 17,
    fontWeight: "600",
    marginBottom: 10,
  },

  option: {
    color: JiguuColors.textSecondary,
    fontSize: 15,
    marginBottom: 4,
  },
});
