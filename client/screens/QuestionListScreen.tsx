import React, { memo } from "react";
import { View, StyleSheet, FlatList, Pressable } from "react-native";
import { RouteProp, useRoute, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ThemedText } from "@/components/ThemedText";

import { RootStackParamList } from "@/navigation/RootStackNavigator";
import {
  getQuestionsForExercise,
} from "@/data/chapterQuestions";

import { JiguuColors, Spacing, Typography } from "@/constants/theme";

type RouteProps = RouteProp<RootStackParamList, "QuestionList">;
type NavProp = NativeStackNavigationProp<RootStackParamList>;

function QuestionListScreen() {
  const route = useRoute<RouteProps>();
  const navigation = useNavigation<NavProp>();

  const { chapterId, chapterName, exerciseNumber } = route.params;

  const questions = getQuestionsForExercise(
    chapterId,
    exerciseNumber
  );

  return (
    <ScreenWrapper showBackButton>
      <View style={styles.container}>
        <ThemedText style={styles.title}>
          Exercise {exerciseNumber}
        </ThemedText>

        <FlatList
          data={questions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Pressable
              style={styles.card}
              onPress={() =>
                navigation.navigate("QuestionParts", {
                  chapterId,
                  chapterName,
                  exerciseNumber,
                  questionNumber: item.number,
                })
              }
            >
              <ThemedText style={styles.text}>
                Question {item.number}
              </ThemedText>
            </Pressable>
          )}
        />
      </View>
    </ScreenWrapper>
  );
}

export default memo(QuestionListScreen);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Spacing.xl,
    paddingBottom: 120,
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
    alignItems: "center",
  },

  text: {
    ...Typography.body,
    fontWeight: "600",
  },
});
