// src/navigation/RootStackNavigator.tsx
// --------------------------------------------------
// ROOT STACK NAVIGATOR
//
// Purpose:
// Central navigation config for entire app.
//
// Includes:
// - Home
// - Subject
// - Chapter list
// - Chapter overview
// - Introduction screen
// - KeyPoints screen
// - MCQ screen
// - Exercise screen
// - Formula / News / About / QuickNotes
//
// ALL navigable screens must be registered here.
// --------------------------------------------------

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { JiguuColors } from "@/constants/theme";

import HomeScreen from "@/screens/HomeScreen";
import SubjectScreen from "@/screens/SubjectScreen";
import ChapterListScreen from "@/screens/ChapterListScreen";
import ChapterOverviewScreen from "@/screens/ChapterOverviewScreen";

import IntroScreen from "@/screens/IntroScreen";
import KeyPointsScreen from "@/screens/KeyPointsScreen";
import MCQScreen from "@/screens/MCQScreen";
import ExerciseScreen from "@/screens/ExerciseScreen";

import FormulaScreen from "@/screens/FormulaScreen";
import NewsEventsScreen from "@/screens/NewsEventsScreen";
import AboutEducatorScreen from "@/screens/AboutEducatorScreen";
import QuickNotesScreen from "@/screens/QuickNotesScreen";

import { Subject } from "@/data/formulas";
import ExerciseHubScreen from "@/screens/ExerciseHubScreen";
/* --------------------------------------------------
   ROUTE TYPES
-------------------------------------------------- */

export type RootStackParamList = {
  Home: undefined;

  Subject: { subject: Subject };

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

  Formula: {
    chapterId: string;
    chapterName: string;
    subject: Subject;
  };

  NewsEvents: undefined;
  AboutEducator: undefined;
  QuickNotes: undefined;

   ExerciseHub: {      
  chapterId: string;
  chapterName: string;
  exerciseNumber: number;
};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

/* --------------------------------------------------
   NAVIGATOR
-------------------------------------------------- */

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

      <Stack.Screen name="Subject" component={SubjectScreen} />

      <Stack.Screen name="ChapterList" component={ChapterListScreen} />

      <Stack.Screen
        name="ChapterOverview"
        component={ChapterOverviewScreen}
      />

      {/* ---------- CHAPTER SECTIONS ---------- */}

      <Stack.Screen name="Intro" component={IntroScreen} />

      <Stack.Screen name="KeyPoints" component={KeyPointsScreen} />

      <Stack.Screen name="MCQs" component={MCQScreen} />

      <Stack.Screen name="Exercise" component={ExerciseScreen} />

      {/* ---------- OTHERS ---------- */}

      <Stack.Screen name="Formula" component={FormulaScreen} />

      <Stack.Screen name="NewsEvents" component={NewsEventsScreen} />

      <Stack.Screen name="AboutEducator" component={AboutEducatorScreen} />

      <Stack.Screen name="QuickNotes" component={QuickNotesScreen} />

       <Stack.Screen  name="ExerciseHub" component={ExerciseHubScreen} />       
    
    </Stack.Navigator>
  );
}
