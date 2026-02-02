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
import QuestionDetailScreen from "@/screens/QuestionDetailScreen";

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

  ExerciseHub: {
    chapterId: string;
    chapterName: string;
  };

  QuestionList: {
    chapterId: string;
    chapterName: string;
    exerciseNumber: number;
  };

  QuestionDetail: {
    chapterName: string;
    questionText: string;
    parts: { id: string; text: string }[];
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

      <Stack.Screen name="ExerciseHub" component={ExerciseHubScreen} />
      <Stack.Screen name="QuestionList" component={QuestionListScreen} />
      <Stack.Screen name="QuestionDetail" component={QuestionDetailScreen} />

      <Stack.Screen name="QuickNotes" component={QuickNotesScreen} />
      <Stack.Screen name="NewsEvents" component={NewsEventsScreen} />
      <Stack.Screen name="AboutEducator" component={AboutEducatorScreen} />
    </Stack.Navigator>
  );
}
