import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

export default function ChapterOverviewScreen() {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();

  const chapter = route.params?.chapter;

  if (!chapter) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>Chapter data missing.</Text>
      </View>
    );
  }

  const sections = [
    { id: "intro", title: "Introduction", screen: "IntroductionScreen" },
    { id: "keypoints", title: "Key Points", screen: "KeyPointsScreen" },
    { id: "mcqs", title: "MCQs", screen: "MCQScreen" },
    { id: "ex1", title: "Exercise 1", screen: "ExerciseScreen", number: 1 },
    { id: "ex2", title: "Exercise 2", screen: "ExerciseScreen", number: 2 },
    { id: "ex3", title: "Exercise 3", screen: "ExerciseScreen", number: 3 },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {sections.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.sectionBtn}
          onPress={() =>
            navigation.navigate(item.screen, {
              chapterId: chapter.id,
              exerciseNumber: item.number,
            })
          }
        >
          <Text style={styles.sectionText}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  sectionBtn: {
    backgroundColor: "#2c3147",
    padding: 18,
    borderRadius: 14,
    marginBottom: 16,
  },
  sectionText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  error: {
    color: "red",
    fontSize: 16,
  },
});
