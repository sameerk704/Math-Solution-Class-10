// src/screens/ChapterListScreen.tsx
// --------------------------------------------------
// Shows all Class 10 chapters.
// On click → goes to ChapterOverview screen.
// --------------------------------------------------

import React, { memo, useCallback } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ChapterCard } from "@/components/ChapterCard";
import { RootStackParamList } from "@/navigation/RootStackNavigator";
import { getClass10AllChapters, Chapter } from "@/data/formulas";
import { Spacing } from "@/constants/theme";

type NavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

const Separator = () => (
  <View style={styles.separator} />
);

function ChapterListScreen() {
  const navigation = useNavigation<NavigationProp>();

  const chapters = getClass10AllChapters();

  const renderItem = useCallback(
    ({ item }: { item: Chapter }) => (
      <ChapterCard
        number={item.number}
        name={item.name}
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
    <ScreenWrapper>
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
