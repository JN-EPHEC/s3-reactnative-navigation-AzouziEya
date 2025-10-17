import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function WishlistScreen() {
  return (
  <View style={styles.container}>
      <Text style={styles.title}>Votre liste de souhaits est vide.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#ffe4ec",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#c2185b",
  },
});
