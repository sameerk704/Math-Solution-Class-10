import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
 
import { JiguuColors } from "@/constants/theme";
import ChapterOverviewScreen from "@/screens/ ChapterOverviewScreen";
import HomeScreen from "@/screens/HomeScreen";
import SubjectScreen from "@/screens/SubjectScreen";
import ChapterListScreen from "@/screens/ChapterListScreen";
import FormulaScreen from "@/screens/FormulaScreen";
import NewsEventsScreen from "@/screens/NewsEventsScreen";
import AboutEducatorScreen from "@/screens/AboutEducatorScreen";
import QuickNotesScreen from "@/screens/QuickNotesScreen";
import { Subject } from "@/data/formulas";

export type RootStackParamList = {
  Home: undefined;
  Subject: { subject: Subject };
  ChapterList: { subject: Subject; classLevel: 9 | 10 };
  Formula: { chapterId: string; chapterName: string; subject: Subject };
  NewsEvents: undefined;
  AboutEducator: undefined;
  QuickNotes: undefined;
  AllChapters: undefined;
  
  ChapterOverview: {
  chapterId: string;
  chapterName: string;
  subject: Subject;
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
      <Stack.Screen name="Subject" component={SubjectScreen} />
      <Stack.Screen name="ChapterList" component={ChapterListScreen} />
      <Stack.Screen name="Formula" component={FormulaScreen} />
      <Stack.Screen name="NewsEvents" component={NewsEventsScreen} />
      <Stack.Screen name="AboutEducator" component={AboutEducatorScreen} />
      <Stack.Screen name="QuickNotes" component={QuickNotesScreen} />
      <Stack.Screen name="AllChapters" component={ChapterListScreen} />
      <Stack.Screen name="ChapterOverview" component={ChapterOverviewScreen} />
    </Stack.Navigator>
  );
}
