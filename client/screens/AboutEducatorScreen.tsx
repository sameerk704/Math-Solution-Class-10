import React, { memo } from "react";
import { StyleSheet, View, Image, ScrollView } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { NavigationButtons } from "@/components/NavigationButtons";
import { StaticHeader } from "@/components/StaticHeader";
import { CreatorCredit } from "@/components/CreatorCredit";
import { JiguuColors, Spacing, BorderRadius, Typography } from "@/constants/theme";

const sameerPhoto = require("../../assets/images/sameer-photo.jpg");
const jiguuLogo = require("../../assets/images/jiguu-logo.png");
const educationIcon = require("../../assets/images/education-icon.jpg");
const thanksIcon = require("../../assets/images/thanks-icon.jpg");

interface SectionProps {
  title: string;
  image: any;
  imageStyle?: "photo" | "logo";
  children: React.ReactNode;
}

const Section = memo(function Section({ title, image, imageStyle = "photo", children }: SectionProps) {
  return (
    <View style={styles.section}>
      {title ? <ThemedText style={styles.sectionTitle}>{title}</ThemedText> : null}
      <View style={styles.sectionContent}>
        <View style={styles.imageWrapper}>
          <Image
            source={image}
            style={imageStyle === "logo" ? styles.logoImage : styles.circularImage}
            resizeMode={imageStyle === "logo" ? "contain" : "cover"}
          />
        </View>
        <View style={styles.textContent}>
          {children}
        </View>
      </View>
    </View>
  );
});

function AboutEducatorScreen() {
  return (
    <View style={styles.container}>
      <StaticHeader />
      <NavigationButtons />
      
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <ThemedText style={styles.pageTitle}>About the Educator</ThemedText>

        <Section title="" image={sameerPhoto} imageStyle="photo">
          <ThemedText style={styles.educatorName}>Sameer Khan</ThemedText>
          <ThemedText style={styles.educatorDegree}>MCA, B.Ed</ThemedText>
          <ThemedText style={styles.educatorTitle}>(Educator)</ThemedText>
          <ThemedText style={styles.description}>
            Passionate educator dedicated to helping students understand concepts clearly and confidently. With a strong academic background and teaching experience, the focus is always on simplicity, clarity, and practical learning.
          </ThemedText>
        </Section>

        <Section title="" image={jiguuLogo} imageStyle="logo">
          <ThemedText style={styles.educatorName}>About JIGUU</ThemedText>
          <ThemedText style={styles.educatorDegree}>Math Formula Guide</ThemedText>
          <ThemedText style={styles.description}>
            JIGUU is designed to support students in quick and effective revision of important mathematics formulas. The app covers Algebra, Trigonometry, and Geometry, helping learners recall concepts without confusion.
          </ThemedText>
        </Section>

        <Section title="" image={educationIcon} imageStyle="photo">
          <ThemedText style={styles.educatorName}>What This App Offers</ThemedText>
          <View style={styles.bulletList}>
            <ThemedText style={styles.bulletPoint}>• Well-organized formulas chapter-wise</ThemedText>
            <ThemedText style={styles.bulletPoint}>• Key points and important highlights</ThemedText>
            <ThemedText style={styles.bulletPoint}>• Easy language aligned with latest syllabus</ThemedText>
            <ThemedText style={styles.bulletPoint}>• Quick reference for exams and daily revision</ThemedText>
          </View>
        </Section>

        <Section title="" image={thanksIcon} imageStyle="photo">
          <ThemedText style={styles.educatorName}>Note of Thanks</ThemedText>
          <ThemedText style={styles.description}>
            A sincere thank you to all students and educators who believe in learning with understanding, not memorization. Your trust and support inspire continuous improvement.
          </ThemedText>
        </Section>

        <View style={styles.bottomPadding} />
      </ScrollView>

      <CreatorCredit />
    </View>
  );
}

export default memo(AboutEducatorScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: JiguuColors.background,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: Spacing.xl,
    paddingTop: Spacing.lg,
    paddingBottom: 120,
  },
  pageTitle: {
    ...Typography.h3,
    fontWeight: "700",
    color: "#E91E63",
    textAlign: "center",
    marginBottom: Spacing["2xl"],
  },
  section: {
    marginBottom: Spacing["2xl"],
    backgroundColor: JiguuColors.surface,
    borderRadius: BorderRadius.md,
    padding: Spacing.lg,
  },
  sectionTitle: {
    ...Typography.h4,
    color: JiguuColors.accent1,
    marginBottom: Spacing.md,
  },
  sectionContent: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  imageWrapper: {
    width: 72,
    height: 72,
    borderRadius: BorderRadius.full,
    overflow: "hidden",
    backgroundColor: JiguuColors.surfaceLight,
    alignItems: "center",
    justifyContent: "center",
    marginRight: Spacing.md,
  },
  circularImage: {
    width: 72,
    height: 96,
    marginTop: 18,
  },
  logoImage: {
    width: 64,
    height: 64,
  },
  textContent: {
    flex: 1,
  },
  educatorName: {
    ...Typography.h4,
    color: JiguuColors.textPrimary,
    marginBottom: 2,
  },
  educatorDegree: {
    ...Typography.body,
    color: JiguuColors.textSecondary,
    marginBottom: 2,
  },
  educatorTitle: {
    ...Typography.small,
    color: "#E91E63",
    fontWeight: "600",
    marginBottom: Spacing.sm,
  },
  subtitle: {
    ...Typography.body,
    color: JiguuColors.textSecondary,
    fontWeight: "600",
    marginBottom: Spacing.sm,
  },
  description: {
    ...Typography.small,
    color: JiguuColors.textSecondary,
    lineHeight: 22,
    textAlign: "justify",
  },
  bulletList: {
    gap: Spacing.sm,
  },
  bulletPoint: {
    ...Typography.small,
    color: JiguuColors.textSecondary,
    lineHeight: 22,
    paddingLeft: Spacing.sm,
    textAlign: "justify",
  },
  bottomPadding: {
    height: 20,
  },
});
