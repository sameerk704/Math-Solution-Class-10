// src/navigation/RootStackNavigator.tsx
// --------------------------------------------------
// ROOT STACK NAVIGATOR
//
// Purpose:
// Central navigation configuration for the entire app.
//
// Includes:
// - Home
// - Chapter list
// - Chapter overview
// - Intro
// - Key Points
// - MCQs
// - Exercise Hub
// - Question List
// - Quick Notes
// - News & Events
// - About Educator
//
// All screens are wrapped by ScreenWrapper which
// provides static header & footer.
// --------------------------------------------------

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "@/screens/HomeScreen";
import ChapterListScreen from "@/screens/ChapterListScreen";
import ChapterOverviewScreen from "@/screens/ChapterOverviewScreen";

import IntroScreen from "@/screens/IntroScreen";
import KeyPointsScreen from "@/screens/KeyPointsScreen";
import MCQScreen from "@/screens/MCQScreen";

import ExerciseHubScreen from "@/screens/ExerciseHubScreen";
import QuestionListScreen from "@/screens/QuestionListScreen";

import QuickNotesScreen from "@/screens/QuickNotesScreen";
import NewsEventsScreen from "@/screens/NewsEventsScreen";
import AboutEducatorScreen from "@/screens/AboutEducatorScreen";

/* --------------------------------------------------
   ROUTE PARAM TYPES
-------------------------------------------------- */

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

  ExerciseHub: {
    chapterId: string;
    chapterName: string;
  };

  QuestionList: {
    chapterId: string;
    chapterName: string;
    exerciseNumber: string;
  };

  QuickNotes: undefined;
  NewsEvents: undefined;
  AboutEducator: undefined;
};

/* --------------------------------------------------
   STACK INITIALIZATION
-------------------------------------------------- */

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />

      <Stack.Screen name="ChapterList" component={ChapterListScreen} />

      <Stack.Screen
        name="ChapterOverview"
        component={ChapterOverviewScreen}
      />

      <Stack.Screen name="Intro" component={IntroScreen} />

      <Stack.Screen name="KeyPoints" component={KeyPointsScreen} />

      <Stack.Screen name="MCQs" component={MCQScreen} />

      <Stack.Screen
        name="ExerciseHub"
        component={ExerciseHubScreen}
      />

      <Stack.Screen
        name="QuestionList"
        component={QuestionListScreen}
      />

      <Stack.Screen name="QuickNotes" component={QuickNotesScreen} />

      <Stack.Screen name="NewsEvents" component={NewsEventsScreen} />

      <Stack.Screen
        name="AboutEducator"
        component={AboutEducatorScreen}
      />
    </Stack.Navigator>
  );
}
