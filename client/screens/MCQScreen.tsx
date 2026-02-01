[4:10 am, 2/2/2026] sameer khan: // src/screens/MCQScreen.tsx
// -----------------------------------------------------------------------------
// Displays MCQs for selected chapter.
// Uses chaptersContent.ts as offline source.
// -----------------------------------------------------------------------------

import React from "react";
import { StyleSheet, View } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ThemedText } from "@/components/ThemedText";

import { RootStackParamList } from "@/navigation/RootStackNavigator";
import { getChapterContent } from "@/data/chaptersContent";

import { JiguuColors, Spacing, Typography } from "@/constants/theme";

type RouteProps = RouteProp<RootS…
[4:10 am, 2/2/2026] sameer khan: // src/navigation/RootStackNavigator.tsx
// -----------------------------------------------------------------------------
// ROOT STACK NAVIGATION CONFIG
//
// Defines ALL application routes and their params.
// Must stay aligned with screen navigation calls.
// -----------------------------------------------------------------------------

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "@/screens/HomeScreen";
import ChapterListScreen from "@/screens/ChapterListScreen";
import ChapterOverviewScreen from "@/screens/ChapterOverviewScreen";

import IntroScreen from "@/screens/IntroScreen";
import KeyPointsScreen from "@/screens/KeyPointsScreen";
import MCQScreen from "@/screens/MCQScreen";

import QuickNotesScreen from "@/screens/QuickNotesScreen";
import NewsEventsScreen from "@/screens/NewsEventsScreen";
import AboutEducatorScreen from "@/screens/AboutEducatorScreen";

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

  Exercise: {
    chapterId: string;
    chapterName: string;
    exerciseNumber: number;
  };

  QuickNotes: undefined;
  NewsEvents: undefined;
  AboutEducator: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />

      <Stack.Screen name="ChapterList" component={ChapterListScreen} />
      <Stack.Screen name="ChapterOverview" component={ChapterOverviewScreen} />

      <Stack.Screen name="Intro" component={IntroScreen} />
      <Stack.Screen name="KeyPoints" component={KeyPointsScreen} />
      <Stack.Screen name="MCQs" component={MCQScreen} />

      <Stack.Screen name="QuickNotes" component={QuickNotesScreen} />
      <Stack.Screen name="NewsEvents" component={NewsEventsScreen} />
      <Stack.Screen name="AboutEducator" component={AboutEducatorScreen} />
    </Stack.Navigator>
  );
}
