// src/App.tsx
// --------------------------------------------------
// APPLICATION ROOT
//
// Purpose:
// - Bootstraps fonts & splash.
// - Sets up navigation container.
// - Wraps entire app with:
//     • ErrorBoundary
//     • React Query
//     • SafeArea
//     • Gesture Handler
//     • Keyboard provider
//     • 🔥 SearchProvider (GLOBAL SEARCH ENGINE)
// --------------------------------------------------

import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  Nunito_400Regular,
  Nunito_600SemiBold,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/query-client";

import RootStackNavigator from "@/navigation/RootStackNavigator";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { JiguuColors } from "@/constants/theme";

/* 🔥 GLOBAL SEARCH */
import { SearchProvider } from "@/search/SearchProvider";

SplashScreen.preventAutoHideAsync();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: JiguuColors.background,
    card: JiguuColors.background,
  },
};

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return <View style={styles.loading} />;
  }

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider style={styles.safeArea}>
          <GestureHandlerRootView style={styles.root}>
            <KeyboardProvider>

              {/* 🔥 SEARCH PROVIDER WRAPS EVERYTHING */}
              <SearchProvider>

                <NavigationContainer theme={navTheme}>
                  <RootStackNavigator />
                </NavigationContainer>

              </SearchProvider>

              <StatusBar style="dark" />
            </KeyboardProvider>
          </GestureHandlerRootView>
        </SafeAreaProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: JiguuColors.background,
  },
  safeArea: {
    flex: 1,
    backgroundColor: JiguuColors.background,
  },
  loading: {
    flex: 1,
    backgroundColor: JiguuColors.background,
  },
});
