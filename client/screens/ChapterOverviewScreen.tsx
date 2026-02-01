// src/screens/ChapterOverviewScreen.tsx
// --------------------------------------------------
// Shows buttons for selected chapter:
//
// INTRODUCTION
// KEY POINTS
// MCQs
// EXERCISE 1..N
//
// All chapters always land here first.
// --------------------------------------------------

import React, { memo } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import {
  useRoute,
  RouteProp,
  useNavigation,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ColorButton } from "@/components/ColorButton";
import { ThemedText } from "@/components/ThemedText";
import { RootStackParamList } from "@/navigation/RootStackNavigator";
import { Spacing, Typography } from "@/constants/theme";
import { getChapterContent } from "@/data/chaptersContent";

type RouteProps = RouteProp<
  RootStackParamList,
  "ChapterOverview"
>;

type NavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

function ChapterOverviewScreen() {
  const route = useRoute<RouteProps>();
  const navigation = useNavigation<NavigationProp>();

  const { chapterId, chapterName } = route.params;

  const content = getChapterContent(chapterId);

  return (
    <ScreenWrapper showBackButton>
      <View style={styles.header}>
        <ThemedText style={styles.title}>
          {chapterName}
        </ThemedText>
      </View>

      <FlatList
        data={content.sections}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => {
          if (item.type === "introduction") {
            return (
              <ColorButton
                title="INTRODUCTION"
                color="#6366F1"
                onPress={() =>
                  navigation.navigate("Intro", {
                    chapterId,
                    chapterName,
                  })
                }
              />
            );
          }

          if (item.type === "keypoints") {
            return (
              <ColorButton
                title="KEY POINTS"
                color="#10B981"
                onPress={() =>
                  navigation.navigate("KeyPoints", {
                    chapterId,
                    chapterName,
                  })
                }
              />
            );
          }

          if (item.type === "mcqs") {
            return (
              <ColorButton
                title="MCQs"
                color="#F59E0B"
                onPress={() =>
                  navigation.navigate("MCQs", {
                    chapterId,
                    chapterName,
                  })
                }
              />
            );
          }

          return (
            <ColorButton
              title={item.title}
              color="#EF4444"
              onPress={() => {}}
            />
          );
        }}
      />
    </ScreenWrapper>
  );
}

export default memo(ChapterOverviewScreen);

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
    gap: Spacing.md,
  },
});
