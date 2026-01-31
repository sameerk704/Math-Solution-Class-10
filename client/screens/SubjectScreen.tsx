import React, { memo } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ColorButton } from "@/components/ColorButton";
import { ThemedText } from "@/components/ThemedText";
import { JiguuColors, Spacing, Typography } from "@/constants/theme";
import { RootStackParamList } from "@/navigation/RootStackNavigator";
import { Subject } from "@/data/formulas";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
type SubjectRouteProp = RouteProp<RootStackParamList, "Subject">;

const subjectTitles: Record<Subject, string> = {
  algebra: "Algebra",
  trigonometry: "Trigonometry",
  geometry: "Geometry",
};

const subjectColors: Record<Subject, string> = {
  algebra: JiguuColors.algebra,
  trigonometry: JiguuColors.trigonometry,
  geometry: JiguuColors.geometry,
};

function SubjectScreen() {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<SubjectRouteProp>();
  const { subject } = route.params;

  const subjectColor = subjectColors[subject];
  const subjectTitle = subjectTitles[subject];

  return (
    <ScreenWrapper showBackButton>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <ThemedText style={[styles.subjectTitle, { color: subjectColor }]}>
            {subjectTitle}
          </ThemedText>
        </View>

        <View style={styles.classButtonsContainer}>
          <View style={styles.buttonWrapper}>
            <ColorButton
              testID="button-class9"
              title="Class 9"
              color={subjectColor}
              onPress={() => navigation.navigate("ChapterList", { subject, classLevel: 9 })}
            />
          </View>

          <View style={styles.buttonWrapper}>
            <ColorButton
              testID="button-class10"
              title="Class 10"
              color={subjectColor}
              onPress={() => navigation.navigate("ChapterList", { subject, classLevel: 10 })}
            />
          </View>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}

export default memo(SubjectScreen);

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  content: {
    alignItems: "center",
    paddingHorizontal: Spacing["2xl"],
    paddingTop: Spacing["2xl"],
    paddingBottom: 100,
  },
  subjectTitle: {
    ...Typography.h1,
    marginBottom: Spacing["2xl"],
    textAlign: "center",
  },
  classButtonsContainer: {
    gap: Spacing.lg,
    width: "100%",
  },
  buttonWrapper: {
    width: "100%",
  },
});
