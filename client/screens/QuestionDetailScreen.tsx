import React from "react";
import { View, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ThemedText } from "@/components/ThemedText";

export default function QuestionDetailScreen() {
  const route = useRoute<any>();

  const { chapterName, questionText, parts } = route.params;

  return (
    <ScreenWrapper showBackButton>
      <View style={styles.container}>
        <ThemedText style={styles.title}>{chapterName}</ThemedText>

        <ThemedText style={styles.question}>
          {questionText}
        </ThemedText>

        {parts.length > 0 &&
          parts.map((p: any) => (
            <View key={p.id} style={styles.partBox}>
              <ThemedText>{p.text}</ThemedText>
            </View>
          ))}
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: { padding: 24 },
  title: { fontSize: 20, textAlign: "center", marginBottom: 14 },
  question: { fontSize: 17, marginBottom: 16 },
  partBox: {
    backgroundColor: "#eee",
    padding: 12,
    borderRadius: 10,
    marginBottom: 8,
  },
});
