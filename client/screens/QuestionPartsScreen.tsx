// src/screens/QuestionPartsScreen.tsx
// --------------------------------------------------
// QUESTION PARTS SCREEN
//
// Purpose:
// Displays all parts of a selected question
// like:
//
// Q1 → (i) (ii) (iii)
//
// Clicking part navigates to SolutionScreen.
//
// Params:
// - chapterId
// - chapterName
// - exerciseNumber
// - questionNumber
// - parts[]
// --------------------------------------------------

import React, { memo } from "react";
import { View, StyleSheet, Pressable, FlatList } from "react-native";
import {
  RouteProp,
  useRoute,
  useNavigation,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ThemedText } from "@/components/ThemedText";

import { RootStackParamList } from "@/navigation/RootStackNavigator";

import { JiguuColors, Spacing, Typography } from "@/constants/theme";

/* --------------------------------------------------
   TYPES
-------------------------------------------------- */

type RouteProps = RouteProp<
  RootStackParamList,
  "QuestionParts"
>;

type NavProp = NativeStackNavigationProp<
  RootStackParamList
>;

/* --------------------------------------------------
   COMPONENT
-------------------------------------------------- */

function QuestionPartsScreen() {
  const route = useRoute<RouteProps>();
  const navigation = useNavigation<NavProp>();

  const {
    chapterId,
    chapterName,
    exerciseNumber,
    questionNumber,
    parts,
  } = route.params;

  return (
    <ScreenWrapper showBackButton>
      <View style={styles.container}>
        <ThemedText style={styles.title}>
          Ex {exerciseNumber} — Q{questionNumber}
        </ThemedText>

        <FlatList
          data={parts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Pressable
              style={styles.card}
              onPress={() =>
                navigation.navigate("Solution", {
                  chapterId,
                  chapterName,
                  exerciseNumber,
                  questionNumber,
                  partId: item.id,
                })
              }
            >
              <ThemedText style={styles.cardText}>
                Part {item.label}
              </ThemedText>
            </Pressable>
          )}
        />
      </View>
    </ScreenWrapper>
  );
}

export default memo(QuestionPartsScreen);

/* --------------------------------------------------
   STYLES
-------------------------------------------------- */

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

  cardText: {
    ...Typography.body,
    fontWeight: "600",
  },
});
