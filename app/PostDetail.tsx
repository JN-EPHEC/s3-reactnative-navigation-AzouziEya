import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function PostDetail() {
  const { title, content } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.body}>{content}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  title: {
    marginBottom: 12,
    fontWeight: "bold",
    fontSize: 20,
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
  },
});
