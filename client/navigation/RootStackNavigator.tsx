// src/navigation/RootStackNavigator.tsx
// --------------------------------------------------
// ROOT STACK NAVIGATOR (FINAL)
// Controls all screen routing in the app.
//
// Flow:
// Home
// → ChapterList
// → ChapterOverview
// → Intro / KeyPoints / MCQs / Exercises
// --------------------------------------------------

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { JiguuColors } from "@/constants/theme";

import HomeScreen from "@/screens/HomeScreen";
import ChapterListScreen from "@/screens/ChapterListScreen";
import ChapterOverviewScreen from "@/screens/ChapterOverviewScreen";
import IntroScreen from "@/screens/IntroScreen";
import KeyPointsScreen from "@/screens/KeyPointsScreen";
import MCQScreen from "@/screens/MCQScreen";

export type RootStackParamList = {
  Home: undefined;

  ChapterList: undefined;

  ChapterOverview: {
    chapterId: string;
    chapterName: string;
  };

  Intro: {
    chapterId: string;
    chapterName: string;
  };

  KeyPoints: {
    chapterId: string;
    chapterName: string;
  };

  MCQs: {
    chapterId: string;
    chapterName: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "none",
        contentStyle: { backgroundColor: JiguuColors.background },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />

      <Stack.Screen
        name="ChapterList"
        component={ChapterListScreen}
      />

      <Stack.Screen
        name="ChapterOverview"
        component={ChapterOverviewScreen}
      />

      <Stack.Screen name="Intro" component={IntroScreen} />

      <Stack.Screen name="KeyPoints" component={KeyPointsScreen} />

      <Stack.Screen name="MCQs" component={MCQScreen} />
    </Stack.Navigator>
  );
}
