import React from "react";
import { StyleSheet, Pressable, FlatList, Text, View } from "react-native";
import { useRouter } from "expo-router";

const POSTS = [
  {
    id: "1",
    title: "React Native est génial",
    content:
      "React Native permet de créer des apps mobiles avec JavaScript. Apprenez une fois, déployez partout !",
  },
  {
    id: "2",
    title: "Conseils de gestion d'état",
    content:
      "Gérez l'état simplement, puis ajoutez des librairies si besoin. Un exemple pour l'exercice.",
  },
  {
    id: "3",
    title: "Principes de conception de l'interface utilisateur",
    content:
      "Une bonne UI est claire et cohérente. Gardez vos interfaces simples et prévisibles.",
  },
  {
    id: "4",
    title: "Optimiser les performances",
    content:
      "Analysez avant d'optimiser. Utilisez la virtualisation des listes et évitez les rendus inutiles.",
  },
];

export default function PostList() {
  const router = useRouter();

  function handlePress(item: typeof POSTS[number]) {
    router.push({
      pathname: "/PostDetail",
      params: { title: item.title, content: item.content },
    });
  }

  function renderItem({ item }: { item: (typeof POSTS)[number] }) {
    return (
      <Pressable
        style={({ pressed }) => [
          styles.item,
          pressed && styles.itemPressed,
        ]}
        onPress={() => handlePress(item)}
      >
        <Text>{item.title}</Text>
      </Pressable>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={POSTS}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    padding: 16,
  },
  item: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 12,
    backgroundColor: "rgba(0,0,0,0.03)",
  },
  itemPressed: {
    opacity: 0.7,
  },
});
