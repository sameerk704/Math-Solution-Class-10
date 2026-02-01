import React, { memo, useCallback } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ChapterCard } from "@/components/ChapterCard";
import { EmptyState } from "@/components/EmptyState";
import { JiguuColors, Spacing } from "@/constants/theme";
import { RootStackParamList } from "@/navigation/RootStackNavigator";
import { getClass10AllChapters, Chapter } from "@/data/formulas";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Separator = memo(() => <View style={styles.separator} />);

function ChapterListScreen() {
  const navigation = useNavigation<NavigationProp>();

  const chapters = getClass10AllChapters();

  const renderItem = useCallback(
    ({ item }: { item: Chapter }) => (
      <ChapterCard
        testID={`chapter-card-${item.id}`}
        number={item.number}
        name={item.name}
        color={JiguuColors.algebra}
        onPress={() =>
          navigation.navigate("ChapterOverview", {
            chapterId: item.id,
            chapterName: item.name,
            subject: item.subject,
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
        contentContainerStyle={[
          styles.listContent,
          chapters.length === 0 ? styles.emptyContent : null,
        ]}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={Separator}
        ListEmptyComponent={
          <EmptyState
            title="No Chapters Found"
            message="Chapters will be added soon."
          />
        }
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
  separator: {
    height: Spacing.md,
  },
});
