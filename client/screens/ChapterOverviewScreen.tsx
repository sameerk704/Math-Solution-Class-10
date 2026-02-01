import React, { memo } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { useRoute, RouteProp, useNavigation } from "@react-navigation/native";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ThemedText } from "@/components/ThemedText";
import { JiguuColors, Spacing, Typography } from "@/constants/theme";
import { RootStackParamList } from "@/navigation/RootStackNavigator";

import {
  getChapterContent,
  ChapterSection,
} from "@/data/chaptersContent";

type RouteProps = RouteProp<RootStackParamList, "ChapterOverview">;

function ChapterOverviewScreen() {
  const route = useRoute<RouteProps>();
  const { chapterId, chapterName } = route.params;

  const content = getChapterContent(chapterId);

  return (
    <ScreenWrapper showBackButton>
      <View style={styles.header}>
        <ThemedText style={styles.title}>{chapterName}</ThemedText>
      </View>

      <FlatList
        data={content.sections}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.sectionCard}>
            <ThemedText style={styles.sectionTitle}>
              {item.title}
            </ThemedText>
          </View>
        )}
        contentContainerStyle={styles.list}
      />
    </ScreenWrapper>
  );
}

export default memo(ChapterOverviewScreen);

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    marginBottom: Spacing.xl,
  },
  title: {
    ...Typography.h3,
    fontWeight: "700",
  },
  list: {
    paddingHorizontal: Spacing.xl,
    paddingBottom: 120,
  },
  sectionCard: {
    backgroundColor: JiguuColors.surface,
    padding: Spacing.lg,
    borderRadius: 14,
    marginBottom: Spacing.md,
  },
  sectionTitle: {
    ...Typography.body,
    fontWeight: "600",
  },
});
