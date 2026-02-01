import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { chapters } from "../data/chapters";

export default function ChapterListScreen() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <FlatList
        data={chapters}
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
    backgroundColor: "#22273a",
    padding: 18,
    borderRadius: 14,
    marginBottom: 14,
  },
  chapterTitle: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "600",
    textAlign: "center",
  },
});
