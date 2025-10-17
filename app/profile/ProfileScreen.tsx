import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profil de Eya Azouzi</Text>
      <Text style={styles.info}>Nom : Eya Azouzi</Text>
      <Text style={styles.info}>Email : eya.azouzi@example.com</Text>
      <Text style={styles.info}>Statut : Étudiante</Text>
      <Text style={styles.signature}>✨ Bonne chance pour le devoir ! ✨</Text>
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
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#c2185b",
  },
  info: {
    fontSize: 16,
    marginBottom: 8,
    color: "#333",
  },
  signature: {
    marginTop: 24,
    fontSize: 18,
    color: "#c2185b",
    fontWeight: "bold",
    fontStyle: "italic",
    textAlign: "center",
  },
});
