import React, { memo } from "react";
import { StyleSheet, View, Image, useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { ThemedText } from "@/components/ThemedText";
import { Spacing, JiguuColors, Typography, BorderRadius } from "@/constants/theme";

const sameerPhoto = require("../../assets/images/sameer-photo.jpg");

export const CreatorCredit = memo(function CreatorCredit() {
  const insets = useSafeAreaInsets();
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  return (
    <View style={[
      styles.container, 
      { 
        paddingBottom: isLandscape ? insets.bottom + 2 : insets.bottom + Spacing.sm,
        paddingTop: isLandscape ? 4 : Spacing.md,
      }
    ]}>
      <View style={[styles.photoWrapper, isLandscape && styles.photoWrapperLandscape]}>
        <Image 
          source={sameerPhoto} 
          style={[styles.photo, isLandscape && styles.photoLandscape]} 
          resizeMode="cover" 
        />
      </View>
      <View style={styles.textContainer}>
        <ThemedText style={[styles.name, isLandscape && styles.nameLandscape]}>Sameer Khan</ThemedText>
        {!isLandscape ? <ThemedText style={styles.title}>Educator</ThemedText> : null}
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: Spacing.lg,
    backgroundColor: JiguuColors.background,
    borderTopWidth: 1,
    borderTopColor: JiguuColors.border,
  },
  photoWrapper: {
    width: 52,
    height: 52,
    borderRadius: BorderRadius.full,
    overflow: "hidden",
    marginRight: Spacing.md,
    alignItems: "center",
    justifyContent: "center",
  },
  photoWrapperLandscape: {
    width: 32,
    height: 32,
  },
  photo: {
    width: 52,
    height: 70,
    marginTop: 14,
  },
  photoLandscape: {
    width: 32,
    height: 44,
    marginTop: 10,
  },
  textContainer: {
    alignItems: "center",
  },
  name: {
    ...Typography.small,
    fontWeight: "700",
    color: JiguuColors.textPrimary,
    lineHeight: 18,
  },
  nameLandscape: {
    fontSize: 12,
    lineHeight: 14,
  },
  title: {
    ...Typography.caption,
    color: JiguuColors.trigonometry,
    fontWeight: "600",
    lineHeight: 16,
  },
});
