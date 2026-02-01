// src/screens/MCQScreen.tsx
// --------------------------------------------------
// MCQ SCREEN
//
// Purpose:
// Displays chapter-wise MCQs.
//
// Data Source:
// src/data/chaptersContent.ts
//
// Features:
// - Dynamic MCQs per chapter
// - Offline content
// - Shows questions + options
// - Highlights correct answer on tap
// - Safe fallback if MCQs empty
//
// Navigation Params Required:
// {
//   chapterId: string;
//   chapterName: string;
// }
// --------------------------------------------------

import React, { memo, useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Pressable,
} from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ThemedText } from "@/components/ThemedText";
import { EmptyState } from "@/components/EmptyState";

import {
  getChapterContent,
  MCQ,
} from "@/data/chaptersContent";

import {
  JiguuColors,
  Spacing,
  Typography,
  BorderRadius,
} from "@/constants/theme";

import { RootStackParamList } from "@/navigation/RootStackNavigator";

type RouteProps = RouteProp<RootStackParamList, "MCQs">;

function MCQScreen() {
  const route = useRoute<RouteProps>();

  const { chapterId, chapterName } = route.params;

  const chapterData = getChapterContent(chapterId);

  const [selected, setSelected] = useState<
    Record<string, number>
  >({});

  const handleSelect = (
    mcqId: string,
    optionIndex: number
  ) => {
    setSelected((prev) => ({
      ...prev,
      [mcqId]: optionIndex,
    }));
  };

  if (!chapterData.mcqs.length) {
    return (
      <ScreenWrapper showBackButton>
        <EmptyState
          title="No MCQs Yet"
          message="MCQs for this chapter will be added soon."
        />
      </ScreenWrapper>
    );
  }

  return (
    <ScreenWrapper showBackButton>
      <View style={styles.header}>
        <ThemedText style={styles.title}>
          {chapterName} – MCQs
        </ThemedText>
      </View>

      <FlatList
        data={chapterData.mcqs}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item, index }) => {
          const chosen = selected[item.id];
          const correct = item.answerIndex;

          return (
            <View style={styles.card}>
              <ThemedText style={styles.question}>
                {index + 1}. {item.question}
              </ThemedText>

              {item.options.map((opt, idx) => {
                const isSelected = chosen === idx;
                const isCorrect =
                  chosen !== undefined &&
                  idx === correct;

                return (
                  <Pressable
                    key={idx}
                    onPress={() =>
                      handleSelect(item.id, idx)
                    }
                    style={[
                      styles.option,
                      isSelected && styles.optionSelected,
                      isCorrect && styles.optionCorrect,
                    ]}
                  >
                    <ThemedText style={styles.optionText}>
                      {opt}
                    </ThemedText>
                  </Pressable>
                );
              })}
            </View>
          );
        }}
      />
    </ScreenWrapper>
  );
}

export default memo(MCQScreen);

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    marginBottom: Spacing.lg,
  },

  title: {
    ...Typography.h3,
    fontWeight: "700",
    textAlign: "center",
  },

  list: {
    paddingHorizontal: Spacing.xl,
    paddingBottom: 120,
  },

  card: {
    backgroundColor: JiguuColors.surface,
    padding: Spacing.lg,
    borderRadius: BorderRadius.md,
    marginBottom: Spacing.lg,
  },

  question: {
    ...Typography.body,
    fontWeight: "700",
    marginBottom: Spacing.md,
  },

  option: {
    borderWidth: 1,
    borderColor: JiguuColors.border,
    borderRadius: BorderRadius.sm,
    padding: Spacing.md,
    marginBottom: Spacing.sm,
  },

  optionSelected: {
    borderColor: JiguuColors.primary,
    backgroundColor: JiguuColors.primarySoft,
  },

  optionCorrect: {
    borderColor: JiguuColors.success,
    backgroundColor: "#E9FBEF",
  },

  optionText: {
    ...Typography.body,
  },
});
