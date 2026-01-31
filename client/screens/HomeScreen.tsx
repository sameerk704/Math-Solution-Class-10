import React, { memo } from "react";
import { StyleSheet, View, ScrollView, useWindowDimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ColorButton } from "@/components/ColorButton";
import { DailyFormulaWidget } from "@/components/DailyFormulaWidget";
import { JiguuColors, Spacing } from "@/constants/theme";
import { RootStackParamList } from "@/navigation/RootStackNavigator";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

function HomeScreen() {
  const navigation = useNavigation<NavigationProp>();
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  return (
    <ScreenWrapper>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={[
          styles.content,
          { 
            paddingTop: isLandscape ? Spacing.md : 0,
            paddingBottom: isLandscape ? 100 : 100,
            marginTop: isLandscape ? 0 : -20,
            justifyContent: isLandscape ? "flex-start" : "center",
            flexGrow: isLandscape ? 0 : 1,
          }
        ]}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonWrapper}>
            <ColorButton
              testID="button-algebra"
              title="All Chapters"
              color={JiguuColors.algebra}
              onPress={() => navigation.navigate("Subject", { Subject: "algebra" })}  
            />
          </View>

         
          <View style={styles.buttonWrapper}>
            <ColorButton
              testID="button-quick-notes"
              title="Quick Notes"
              color={JiguuColors.geometry}
              onPress={() => navigation.navigate("QuickNotes")}
            />
          </View>

          <View style={styles.buttonWrapper}>
            <ColorButton
              testID="button-news"
              title="News & Events"
              color={JiguuColors.newsEvents}
              onPress={() => navigation.navigate("NewsEvents")}
            />
          </View>

          <View style={styles.buttonWrapper}>
            <ColorButton
              testID="button-about-educator"
              title="About the Educator"
              color="#E91E63"
              onPress={() => navigation.navigate("AboutEducator")}
            />
          </View>

          <DailyFormulaWidget />
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}

export default memo(HomeScreen);

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  content: {
    paddingHorizontal: Spacing["2xl"],
  },
  buttonsContainer: {
    gap: Spacing.md,
  },
  buttonWrapper: {
    width: "100%",
  },
});
