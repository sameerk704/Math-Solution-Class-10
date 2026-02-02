import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ThemedText } from "@/components/ThemedText";

import { getChapterContent } from "@/data/chaptersContent";

export default function QuestionListScreen() {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();

  const { chapterId, chapterName, exerciseNumber } = route.params;

  const chapter = getChapterContent(chapterId);

  const exercise = chapter.exercises.find(
    (e) => e.number === exerciseNumber
  );

  return (
    <ScreenWrapper showBackButton>
      <View style={styles.container}>
        <ThemedText style={styles.title}>
          Exercise {exerciseNumber}
        </ThemedText>

        {exercise?.questions.map((q, idx) => (
          <Pressable
            key={q.id}
            style={styles.card}
            onPress={() =>
              navigation.navigate("QuestionDetail", {
                chapterName,
                questionText: q.text,
                parts: q.parts,
              })
            }
          >
            <ThemedText style={styles.text}>
              Question {idx + 1}
            </ThemedText>
          </Pressable>
        ))}
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: { padding: 24 },
  title: { fontSize: 22, textAlign: "center", marginBottom: 20 },
  card: {
    backgroundColor: "#2c3147",
    padding: 18,
    borderRadius: 14,
    marginBottom: 12,
  },
  text: { color: "#fff", textAlign: "center" },
});
