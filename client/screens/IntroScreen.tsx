// src/screens/IntroScreen.tsx
// --------------------------------------------------
// INTRO SCREEN
// --------------------------------------------------
// Shows Introduction content for selected chapter.
// Receives chapterId + chapterName from navigation.
// Currently placeholder screen.
// --------------------------------------------------

import React from "react";
import { View, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ThemedText } from "@/components/ThemedText";
import { Spacing, Typography } from "@/constants/theme";

export default function IntroScreen() {
  const route = useRoute<any>();
  const { chapterName } = route.params;

  return (
    <ScreenWrapper showBackButton>
      <View style={styles.container}>
        <ThemedText style={styles.title}>{chapterName}</ThemedText>
        <ThemedText>Introduction screen coming soon…</ThemedText>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: Spacing.xl,
  },
  title: {
    ...Typography.h3,
    marginBottom: Spacing.lg,
    textAlign: "center",
  },
});
