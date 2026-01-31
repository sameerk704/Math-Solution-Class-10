import React, { memo, useCallback } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ChapterCard } from "@/components/ChapterCard";
import { ThemedText } from "@/components/ThemedText";
import { EmptyState } from "@/components/EmptyState";
import { JiguuColors, Spacing, Typography } from "@/constants/theme";
import { RootStackParamList } from "@/navigation/RootStackNavigator";
import {
  algebraChapters,
  geometryChapters,
  trigonometryChapters,
  Chapter,
} from "@/data/formulas";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Separator = memo(() => <View style={styles.separator} />);

function ChapterListScreen() {
  const navigation = useNavigation<NavigationProp>();

  // 👉 ALL Class 10 chapters from all subjects
  const chapters: Chapter[] = [
    ...algebraChapters,
    ...trigonometryChapters,
    ...geometryChapters,
  ].filter((ch) => ch.classLevel === 10);

  const renderItem = useCallback(
  ({ item }: { item: Chapter }) => {
    return (
      <ChapterCard
        testID={'chapter-card-${item.id}'}
        number={item.number}
        name={item.name}
        color={JiguuColors.algebra}
        onPress={() =>
          navigation.navigate("Formula", {
            chapterId: item.id,
            chapterName: item.name,
            subject: "algebra",
          })
        }
      />
    );
  },
  [navigation]
);
  const renderHeader = useCallback(
    () => (
      <View style={styles.header}>
        <ThemedText style={styles.title}>Class 10 Chapters</ThemedText>
      </View>
    ),
    []
  );

  const renderEmptyState = useCallback(
    () => (
      <EmptyState
        title="No Chapters Found"
        message="No Class 10 chapters available."
      />
    ),
    []
  );

  return (
    <ScreenWrapper showBackButton>
      <FlatList
        data={chapters}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={[
          styles.listContent,
          chapters.length === 0 ? styles.emptyContent : null,
        ]}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={Separator}
        ListHeaderComponent={renderHeader}
        ListEmptyComponent={renderEmptyState}
      />
    </ScreenWrapper>
  );
}

export default memo(ChapterListScreen);

const styles = StyleSheet.create({
  listContent: {
    paddingHorizontal: Spacing.xl,
    paddingTop: Spacing.lg,
    paddingBottom: 120,
  },
  emptyContent: {
    flex: 1,
    justifyContent: "center",
  },
  header: {
    marginBottom: Spacing.xl,
    alignItems: "center",
  },
  title: {
    ...Typography.h2,
    color: JiguuColors.textPrimary,
  },
  separator: {
    height: Spacing.md,
  },
});
