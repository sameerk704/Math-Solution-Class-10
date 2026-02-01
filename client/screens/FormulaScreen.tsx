import React, { memo, useCallback } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { FormulaCard } from "@/components/FormulaCard";
import { EmptyState } from "@/components/EmptyState";
import { ThemedText } from "@/components/ThemedText";

import { JiguuColors, Spacing, Typography } from "@/constants/theme";
import { RootStackParamList } from "@/navigation/RootStackNavigator";
import { getFormulasForChapter, Formula } from "@/data/formulas";

type FormulaRouteProp = RouteProp<RootStackParamList, "Formula">;

const Separator = memo(() => <View style={styles.separator} />);

function FormulaScreen() {
  const route = useRoute<FormulaRouteProp>();

  const {
    chapterId = "",
    chapterName = "",
    subject = "algebra",
  } = route.params ?? {};

  console.log("FORMULA PARAMS...", route.params);

  const formulas = getFormulasForChapter(chapterId);

  const renderItem = useCallback(
    ({ item }: { item: Formula }) => (
      <FormulaCard title={item.title} formula={item.formula} />
    ),
    []
  );

  const renderEmptyState = useCallback(
    () => (
      <EmptyState
        title="No Formulas Yet"
        message={Formulas for "${chapterName}" will be added soon.}
      />
    ),
    [chapterName]
  );

  return (
    <ScreenWrapper showBackButton>
      <View style={styles.header}>
        <ThemedText style={styles.title}>{chapterName}</ThemedText>
      </View>

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
    fontWeight: "700",
  },
  separator: {
    height: Spacing.lg,
  },
});
