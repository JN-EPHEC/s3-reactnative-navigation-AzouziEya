import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function CourseDetailScreen() {
  const { courseId, title, description } = useLocalSearchParams();

  return (
  <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{description}</Text>
      <Text style={styles.id}>ID du cours : {courseId}</Text>
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
    marginBottom: 12,
    color: "#c2185b",
  },
  desc: {
    fontSize: 16,
    marginBottom: 8,
    color: "#555",
  },
  id: {
    fontSize: 14,
    color: "#888",
  },
});
