import React, { memo, useCallback } from "react";
import { StyleSheet, FlatList, View } from "react-native";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { NewsCard } from "@/components/NewsCard";
import { ThemedText } from "@/components/ThemedText";
import { EmptyState } from "@/components/EmptyState";
import { JiguuColors, Spacing, Typography } from "@/constants/theme";
import { newsData, NewsItem } from "@/data/news";

const Separator = memo(() => <View style={styles.separator} />);

function NewsEventsScreen() {
  const renderItem = useCallback(({ item }: { item: NewsItem }) => (
    <NewsCard
      title={item.title}
      date={item.date}
      description={item.description}
    />
  ), []);

  const renderHeader = useCallback(() => (
    <View style={styles.header}>
      <ThemedText style={styles.title}>News & Events</ThemedText>
    </View>
  ), []);

  const renderEmptyState = useCallback(() => (
    <EmptyState
      title="No News Yet"
      message="Stay tuned for exam updates, tips, and announcements!"
    />
  ), []);

  return (
    <ScreenWrapper showBackButton>
      <FlatList
        data={newsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={[
          styles.listContent,
          newsData.length === 0 ? styles.emptyContent : null,
        ]}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={Separator}
        ListHeaderComponent={renderHeader}
        ListEmptyComponent={renderEmptyState}
      />
    </ScreenWrapper>
  );
}

export default memo(NewsEventsScreen);

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
    color: JiguuColors.newsEvents,
  },
  separator: {
    height: Spacing.lg,
  },
});
