import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ThemedText } from "@/components/ThemedText";

import { RootStackParamList } from "@/navigation/RootStackNavigator";
import { getChapterContent } from "@/data/chaptersContent";

export default function ExerciseHubScreen() {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();

  const { chapterId, chapterName } = route.params;

  const content = getChapterContent(chapterId);

  return (
    <ScreenWrapper showBackButton>
      <View style={styles.container}>
        <ThemedText style={styles.title}>{chapterName}</ThemedText>

        {content.exercises.map((ex) => (
          <Pressable
            key={ex.number}
            style={styles.button}
            onPress={() =>
              navigation.navigate("QuestionList", {
                chapterId,
                chapterName,
                exerciseNumber: ex.number,
              })
            }
          >
            <ThemedText style={styles.text}>
              EXERCISE {ex.number}
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
  button: {
    backgroundColor: "#2c3147",
    padding: 18,
    borderRadius: 14,
    marginBottom: 14,
  },
  text: { color: "#fff", textAlign: "center", fontSize: 17 },
});
