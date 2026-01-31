import React, { memo, useCallback } from "react";
import { StyleSheet, Pressable, Platform, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import * as Haptics from "expo-haptics";
import { Feather } from "@expo/vector-icons";

import { ThemedText } from "@/components/ThemedText";
import { Spacing, JiguuColors, BorderRadius } from "@/constants/theme";
import { RootStackParamList } from "@/navigation/RootStackNavigator";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const NavigationButtons = memo(function NavigationButtons() {
  const navigation = useNavigation<NavigationProp>();

  const handleBack = useCallback(() => {
    if (Platform.OS !== "web") {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    navigation.goBack();
  }, [navigation]);

  const handleHome = useCallback(() => {
    if (Platform.OS !== "web") {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    navigation.navigate("Home");
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Pressable
        testID="button-back"
        style={styles.button}
        onPress={handleBack}
      >
        <View style={styles.arrowIcon}>
          <View style={styles.arrowLine} />
          <View style={styles.arrowHead} />
        </View>
        <ThemedText style={styles.text}>Back</ThemedText>
      </Pressable>

      <Pressable
        testID="button-home"
        style={styles.button}
        onPress={handleHome}
      >
        <Feather name="home" size={16} color={JiguuColors.textPrimary} />
        <ThemedText style={styles.text}>Home</ThemedText>
      </Pressable>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: Spacing.lg,
    marginTop: Spacing.md,
    marginBottom: Spacing.sm,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: JiguuColors.surface,
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.md,
    borderRadius: BorderRadius.xs,
  },
  arrowIcon: {
    width: 16,
    height: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  arrowLine: {
    position: "absolute",
    width: 12,
    height: 2,
    backgroundColor: JiguuColors.textPrimary,
    borderRadius: 1,
  },
  arrowHead: {
    position: "absolute",
    left: 0,
    width: 8,
    height: 8,
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    borderColor: JiguuColors.textPrimary,
    transform: [{ rotate: "45deg" }],
  },
  text: {
    color: JiguuColors.textPrimary,
    fontSize: 14,
    fontWeight: "600",
    marginLeft: Spacing.sm,
  },
});
