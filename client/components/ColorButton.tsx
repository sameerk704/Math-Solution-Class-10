import React, { memo, useCallback, useState } from "react";
import { StyleSheet, Pressable, ViewStyle, Platform } from "react-native";
import * as Haptics from "expo-haptics";

import { ThemedText } from "@/components/ThemedText";
import { BorderRadius, Spacing, JiguuColors, Typography } from "@/constants/theme";

interface ColorButtonProps {
  title: string;
  color: string;
  onPress?: () => void;
  style?: ViewStyle;
  testID?: string;
}

export const ColorButton = memo(function ColorButton({
  title,
  color,
  onPress,
  style,
  testID,
}: ColorButtonProps) {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = useCallback(() => {
    setIsPressed(true);
  }, []);

  const handlePressOut = useCallback(() => {
    setIsPressed(false);
  }, []);

  const handlePress = useCallback(() => {
    if (Platform.OS !== "web") {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    onPress?.();
  }, [onPress]);

  return (
    <Pressable
      testID={testID}
      onPress={handlePress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={[
        styles.button,
        { backgroundColor: color },
        isPressed && styles.buttonPressed,
        style,
      ]}
    >
      <ThemedText style={styles.buttonText}>
        {title.toUpperCase()}
      </ThemedText>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: Spacing.buttonHeight,
    borderRadius: BorderRadius.xs,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },
  buttonText: {
    ...Typography.button,
    fontWeight: "700",
    color: JiguuColors.textOnColor,
    letterSpacing: 1,
  },
});
