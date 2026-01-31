import React, { memo, useCallback } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { FormulaCard } from "@/components/FormulaCard";
import { ChapterIntroCard } from "@/components/ChapterIntroCard";
import { ThemedText } from "@/components/ThemedText";
import { EmptyState } from "@/components/EmptyState";
import { JiguuColors, Spacing, Typography } from "@/constants/theme";
import { RootStackParamList } from "@/navigation/RootStackNavigator";
import { getFormulasForChapter, chapterIntros, Formula, Subject } from "@/data/formulas";

type FormulaRouteProp = RouteProp<RootStackParamList, "Formula">;

const subjectColors: Record<Subject, string> = {
  algebra: JiguuColors.algebra,
  trigonometry: JiguuColors.trigonometry,
  geometry: JiguuColors.geometry,
};

const Separator = memo(() => <View style={styles.separator} />);

function FormulaScreen() {
  const route = useRoute<FormulaRouteProp>();
  const { chapterId, chapterName, subject } = route.params;

  const formulas = getFormulasForChapter(chapterId);
  const chapterIntro = chapterIntros[chapterId];
  const subjectColor = subjectColors[subject];

  const renderItem = useCallback(({ item }: { item: Formula }) => (
    <FormulaCard
      title={item.title}
      formula={item.formula}
      explanation={item.explanation}
      color={subjectColor}
    />
  ), [subjectColor]);

  const renderHeader = useCallback(() => (
    <View>
      <View style={styles.header}>
        <ThemedText style={[styles.title, { color: subjectColor }]}>
          {chapterName}
        </ThemedText>
      </View>
      
      {chapterIntro ? (
        <ChapterIntroCard
          intro={chapterIntro.intro}
          keyPoints={chapterIntro.keyPoints}
          color={subjectColor}
        />
      ) : null}
      
      {formulas.length > 0 ? (
        <View style={styles.formulasHeader}>
          <ThemedText style={styles.formulasTitle}>Formulas</ThemedText>
        </View>
      ) : null}
    </View>
  ), [subjectColor, chapterName, chapterIntro, formulas.length]);

  const renderEmptyState = useCallback(() => (
    <EmptyState
      title="No Formulas Yet"
      message={`Formulas for "${chapterName}" will be added soon.`}
    />
  ), [chapterName]);

  return (
    <ScreenWrapper showBackButton>
      <FlatList
        data={formulas}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={[
          styles.listContent,
          formulas.length === 0 ? styles.emptyContent : null,
        ]}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={Separator}
        ListHeaderComponent={renderHeader}
        ListEmptyComponent={renderEmptyState}
      />
    </ScreenWrapper>
  );
}

export default memo(FormulaScreen);

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
    marginBottom: Spacing.lg,
    alignItems: "center",
  },
  title: {
    ...Typography.h3,
    textAlign: "center",
    fontWeight: "700",
  },
  formulasHeader: {
    marginBottom: Spacing.md,
  },
  formulasTitle: {
    ...Typography.h4,
    color: JiguuColors.textPrimary,
    fontWeight: "700",
  },
  separator: {
    height: Spacing.lg,
  },
});
