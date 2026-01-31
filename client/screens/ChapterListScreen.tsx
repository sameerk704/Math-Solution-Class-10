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
  trigonometryChapters,
  geometryChapters,
  Chapter,
  Subject,
} from "@/data/formulas";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const CLASS_LEVEL: 10 = 10;

const subjectColors: Record<Subject, string> = {
  algebra: JiguuColors.algebra,
  trigonometry: JiguuColors.trigonometry,
  geometry: JiguuColors.geometry,
};

const Separator = memo(() => <View style={styles.separator} />);

function ChapterListScreen() {
  const navigation = useNavigation<NavigationProp>();

  // 🔥 ALL CLASS 10 chapters from every subject
  const chapters: Chapter[] = [
    ...algebraChapters.filter(c => c.classLevel === CLASS_LEVEL),
    ...trigonometryChapters.filter(c => c.classLevel === CLASS_LEVEL),
    ...geometryChapters.filter(c => c.classLevel === CLASS_LEVEL),
  ];

  const renderItem = useCallback(
    ({ item }: { item: Chapter }) => (
      <ChapterCard
        testID={chapter-card-${item.id}}
        number={item.number}
        name={item.name}
        color={subjectColors[item.subject]}
        onPress={() =>
          navigation.navigate("Formula", {
            chapterId: item.id,
            chapterName: item.name,
            subject: item.subject,
          })
        }
      />
    ),
    [navigation]
  );

  const renderHeader = useCallback(
    () => (
      <View style={styles.header}>
        <ThemedText style={styles.title}>
          All Chapters – Class 10
        </ThemedText>
      </View>
    ),
    []
  );

  const renderEmptyState = useCallback(
    () => (
      <EmptyState
        title="No Chapters Found"
        message="No chapters available for Class 10."
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
          chapters.length === 0 && styles.emptyContent,
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
