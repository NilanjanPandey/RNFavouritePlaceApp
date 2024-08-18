import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function IconButton({ iconSize, iconColor, iconName, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
    >
      <Ionicons name={iconName} size={iconSize} color={iconColor} />
    </Pressable>
  );
}

export default IconButton;
const styles = StyleSheet.create({
  button: {
    padding: 8,
    // margin: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonPressed: {
    opacity: 0.7,
  },
});
