import React from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RootStackParamList } from "@/navigation/RootStackNavigator";
import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ColorButton } from "@/components/ColorButton";

type NavProp = NativeStackNavigationProp<RootStackParamList>;

export default function HomeScreen() {
  const navigation = useNavigation<NavProp>();

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <ColorButton
          title="ALL CHAPTERS"
          color="#FB7185"
          onPress={() => navigation.navigate("ChapterList")}
        />

        <ColorButton
          title="QUICK NOTES"
          color="#06B6D4"
          onPress={() => navigation.navigate("QuickNotes")}
        />

        <ColorButton
          title="NEWS & EVENTS"
          color="#8B5CF6"
          onPress={() => navigation.navigate("NewsEvents")}
        />

        <ColorButton
          title="ABOUT THE EDUCATOR"
          color="#EC4899"
          onPress={() => navigation.navigate("AboutEducator")}
        />
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    gap: 18,
  },
});
