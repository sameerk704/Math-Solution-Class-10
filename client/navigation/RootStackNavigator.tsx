// src/navigation/RootStackNavigator.ts
// --------------------------------------------------
// ROOT STACK NAVIGATOR
// --------------------------------------------------
// This file defines ALL app-level navigation routes.
// It connects Home → Chapters → ChapterOverview
// → Intro / KeyPoints / MCQs / Exercises / Formula etc.
//
// New routes added:
// - ChapterOverview
// - Intro
// - KeyPoints
// - MCQs
//
// These will receive chapterId + chapterName
// so correct chapter content can load dynamically.
// --------------------------------------------------

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { JiguuColors } from "@/constants/theme";

import HomeScreen from "@/screens/HomeScreen";
import ChapterListScreen from "@/screens/ChapterListScreen";
import FormulaScreen from "@/screens/FormulaScreen";
import NewsEventsScreen from "@/screens/NewsEventsScreen";
import AboutEducatorScreen from "@/screens/AboutEducatorScreen";
import QuickNotesScreen from "@/screens/QuickNotesScreen";

import ChapterOverviewScreen from "@/screens/ChapterOverviewScreen";
import IntroScreen from "@/screens/IntroScreen";
import KeyPointsScreen from "@/screens/KeyPointsScreen";
import MCQScreen from "@/screens/MCQScreen";

import { Subject } from "@/data/formulas";

export type RootStackParamList = {
  Home: undefined;

  AllChapters: undefined;

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

  Formula: {
    chapterId: string;
    chapterName: string;
    subject: Subject;
  };

  NewsEvents: undefined;
  AboutEducator: undefined;
  QuickNotes: undefined;
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

      <Stack.Screen name="AllChapters" component={ChapterListScreen} />

      <Stack.Screen
        name="ChapterOverview"
        component={ChapterOverviewScreen}
      />

      <Stack.Screen name="Intro" component={IntroScreen} />
      <Stack.Screen name="KeyPoints" component={KeyPointsScreen} />
      <Stack.Screen name="MCQs" component={MCQScreen} />

      <Stack.Screen name="Formula" component={FormulaScreen} />

      <Stack.Screen name="NewsEvents" component={NewsEventsScreen} />
      <Stack.Screen name="AboutEducator" component={AboutEducatorScreen} />
      <Stack.Screen name="QuickNotes" component={QuickNotesScreen} />
    </Stack.Navigator>
  );
}
