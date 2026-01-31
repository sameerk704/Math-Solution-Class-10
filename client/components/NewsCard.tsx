import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import { ThemedText } from "@/components/ThemedText";
import { JiguuColors, Spacing, BorderRadius, Typography } from "@/constants/theme";

interface NewsCardProps {
  title: string;
  date: string;
  description: string;
}

export const NewsCard = memo(function NewsCard({
  title,
  date,
  description,
}: NewsCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <Feather name="bell" size={18} color={JiguuColors.newsEvents} />
        </View>
        <View style={styles.headerText}>
          <ThemedText style={styles.title} numberOfLines={2}>
            {title}
          </ThemedText>
          <View style={styles.dateContainer}>
            <Feather name="calendar" size={12} color={JiguuColors.textSecondary} />
            <ThemedText style={styles.date}>{date}</ThemedText>
          </View>
        </View>
      </View>
      
      <View style={styles.divider} />
      
      <ThemedText style={styles.description}>
        {description}
      </ThemedText>
    </View>
  );
});

const styles = StyleSheet.create({
  card: {
    backgroundColor: JiguuColors.surface,
    borderRadius: BorderRadius.md,
    padding: Spacing.lg,
    borderLeftWidth: 4,
    borderLeftColor: JiguuColors.newsEvents,
  },
  header: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: Spacing.md,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: BorderRadius.full,
    backgroundColor: JiguuColors.surfaceLight,
    alignItems: "center",
    justifyContent: "center",
    marginRight: Spacing.md,
  },
  headerText: {
    flex: 1,
  },
  title: {
    ...Typography.h4,
    color: JiguuColors.textPrimary,
    marginBottom: Spacing.xs,
    lineHeight: 24,
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.xs,
  },
  date: {
    ...Typography.caption,
    color: JiguuColors.textSecondary,
  },
  divider: {
    height: 1,
    backgroundColor: JiguuColors.border,
    marginBottom: Spacing.md,
  },
  description: {
    ...Typography.small,
    color: JiguuColors.textSecondary,
    lineHeight: 22,
    textAlign: "justify",
  },
});
