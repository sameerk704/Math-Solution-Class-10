import React, { memo, useCallback } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ChapterCard } from "@/components/ChapterCard";
import { ThemedText } from "@/components/ThemedText";
import { EmptyState } from "@/components/EmptyState";
import { JiguuColors, Spacing, Typography } from "@/constants/theme";
import { RootStackParamList } from "@/navigation/RootStackNavigator";
import { getChaptersForSubjectAndClass, Chapter, Subject } from "@/data/formulas";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
type ChapterListRouteProp = RouteProp<RootStackParamList, "ChapterList">;

const subjectColors: Record<Subject, string> = {
  algebra: JiguuColors.algebra,
  trigonometry: JiguuColors.trigonometry,
  geometry: JiguuColors.geometry,
};

const Separator = memo(() => <View style={styles.separator} />);

function ChapterListScreen() {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<ChapterListRouteProp>();
  const { subject, classLevel } = route.params;

  const chapters = getChaptersForSubjectAndClass(subject, classLevel);
  const subjectColor = subjectColors[subject];

  const renderItem = useCallback(({ item }: { item: Chapter }) => (
    <ChapterCard
      testID={`chapter-card-${item.id}`}
      number={item.number}
      name={item.name}
      color={subjectColor}
      onPress={() =>
        navigation.navigate("Formula", {
          chapterId: item.id,
          chapterName: item.name,
          subject,
        })
      }
    />
  ), [subjectColor, navigation, subject]);

  const renderHeader = useCallback(() => (
    <View style={styles.header}>
      <ThemedText style={[styles.title, { color: subjectColor }]}>
        Class {classLevel} Chapters
      </ThemedText>
    </View>
  ), [subjectColor, classLevel]);

  const renderEmptyState = useCallback(() => (
    <EmptyState
      title="No Chapters Found"
      message={`No chapters available for Class ${classLevel}.`}
    />
  ), [classLevel]);

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
  },
  separator: {
    height: Spacing.md,
  },
});
