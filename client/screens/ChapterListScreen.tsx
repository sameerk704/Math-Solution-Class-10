// src/screens/ChapterListScreen.tsx
// -----------------------------------------------------------------------------
// Displays ALL chapters for Class 10.
// Navigates to ChapterOverview with correct params.
// -----------------------------------------------------------------------------

import React, { memo, useCallback } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ChapterCard } from "@/components/ChapterCard";
import { JiguuColors, Spacing } from "@/constants/theme";

import { RootStackParamList } from "@/navigation/RootStackNavigator";
import { getClass10AllChapters, Chapter } from "@/data/formulas";

type NavProp = NativeStackNavigationProp<
  RootStackParamList,
  "ChapterList"
>;

const Separator = memo(() => <View style={styles.separator} />);

function ChapterListScreen() {
  const navigation = useNavigation<NavProp>();

  const chapters = getClass10AllChapters();

  const renderItem = useCallback(
    ({ item }: { item: Chapter }) => (
      <ChapterCard
        number={item.number}
        name={item.name}
        color={JiguuColors.algebra}
        onPress={() =>
          navigation.navigate("ChapterOverview", {
            chapterId: item.id,
            chapterName: item.name,
          })
        }
      />
    ),
    [navigation]
  );

  return (
    <ScreenWrapper showBackButton>
      <FlatList
        data={chapters}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={Separator}
        contentContainerStyle={styles.list}
      />
    </ScreenWrapper>
  );
}

export default memo(ChapterListScreen);

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: Spacing.xl,
    paddingTop: Spacing.lg,
    paddingBottom: 120,
  },
  separator: {
    height: Spacing.md,
  },
});
