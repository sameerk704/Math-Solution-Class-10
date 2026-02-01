import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RootStackParamList } from "@/navigation/RootStackNavigator";
import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ColorButton } from "@/components/ColorButton";
import { ThemedText } from "@/components/ThemedText";

import { getChapterContent } from "@/data/chaptersContent";

type NavProp = NativeStackNavigationProp<RootStackParamList>;

export default function ChapterOverviewScreen() {
  const navigation = useNavigation<NavProp>();
  const route = useRoute<any>();

  const { chapterId, chapterName } = route.params;

  const content = getChapterContent(chapterId);

  return (
    <ScreenWrapper showBackButton>
      <View style={styles.header}>
        <ThemedText style={styles.title}>
          {chapterName}
        </ThemedText>
      </View>

      <FlatList
        data={content.sections}
        keyExtractor={(i) => i.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => {
          if (item.type === "introduction")
            return (
              <ColorButton
                title="INTRODUCTION"
                color="#6366F1"
                onPress={() =>
                  navigation.navigate("Intro", {
                    chapterId,
                    chapterName,
                  })
                }
              />
            );

          if (item.type === "keypoints")
            return (
              <ColorButton
                title="KEY POINTS"
                color="#10B981"
                onPress={() =>
                  navigation.navigate("KeyPoints", {
                    chapterId,
                    chapterName,
                  })
                }
              />
            );

          if (item.type === "mcqs")
            return (
              <ColorButton
                title="MCQs"
                color="#F59E0B"
                onPress={() =>
                  navigation.navigate("MCQs", {
                    chapterId,
                    chapterName,
                  })
                }
              />
            );

          return (
            <ColorButton
              title={item.title}
              color="#EF4444"
              onPress={() => {}}
            />
          );
        }}
      />
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    marginBottom: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
  },
  list: {
    paddingHorizontal: 22,
    paddingBottom: 120,
    gap: 14,
  },
});
