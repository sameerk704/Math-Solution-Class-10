import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { chaptersContent } from "../data/chaptersContent";

export default function ChapterListScreen() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <FlatList
        data={chaptersContent}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.chapterCard}
            onPress={() =>
              navigation.navigate("ChapterOverview", {
                chapter: item,
              })
            }
          >
            <Text style={styles.chapterTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  list: {
    padding: 20,
  },

  chapterCard: {
    backgroundColor: "#232842",
    padding: 18,
    borderRadius: 14,
    marginBottom: 14,
  },

  chapterTitle: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "600",
  },
});
