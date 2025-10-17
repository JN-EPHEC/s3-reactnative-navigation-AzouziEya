import React from "react";
import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

const COURSES = [
  {
    id: "1",
    title: "Introduction à React Native",
    description: "Apprenez les bases du développement mobile avec React Native.",
  },
  {
    id: "2",
    title: "JavaScript avancé",
    description: "Approfondissez vos connaissances en JavaScript moderne.",
  },
  {
    id: "3",
    title: "UI/UX pour les développeurs",
    description: "Principes essentiels pour concevoir des interfaces efficaces.",
  },
  {
    id: "4",
    title: "BA - Fondamentaux de l’analyse business",
    description: "Découvrez les bases du métier de Business Analyst et ses outils principaux.",
  },
  {
    id: "5",
    title: "BA - Modélisation des processus",
    description: "Apprenez à cartographier et optimiser les processus métier.",
  },
  {
    id: "6",
    title: "BA - Recueil des besoins",
    description: "Techniques et bonnes pratiques pour comprendre et formaliser les besoins clients.",
  },
  {
    id: "7",
    title: "BA - Rédaction des spécifications",
    description: "Comment rédiger des documents de spécifications clairs et efficaces.",
  },
  {
    id: "8",
    title: "BA - Gestion du changement",
    description: "Accompagner les équipes et les clients dans la transformation digitale.",
  },
  {
    id: "9",
    title: "BA - Outils et méthodes agiles",
    description: "Utiliser les méthodes agiles dans le métier de Business Analyst.",
  },
];

export default function CourseListScreen() {
  const router = useRouter();
  const [showCover, setShowCover] = React.useState(true);

  function handlePress(course: typeof COURSES[number]) {
    router.push({
      pathname: "/courses/stack/CourseDetail",
      params: {
        courseId: course.id,
        title: course.title,
        description: course.description,
      },
    });
  }

  if (showCover) {
    return (
      <View style={styles.coverContainer}>
        <Text style={styles.coverTitle}>Mini-application « Recherche de cours »</Text>
        <Text style={styles.coverSubtitle}>Réalisée par Eya Azouzi</Text>
        <Text style={styles.coverDesc}>Parcourez les cours, découvrez les détails et gérez votre profil dans une interface moderne et agréable.</Text>
        <Pressable style={styles.coverButton} onPress={() => setShowCover(false)}>
          <Text style={styles.coverButtonText}>Accéder à la liste des cours</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bienvenue sur les cours, Eya !</Text>
      <Text style={styles.subheader}>Sélectionne un cours pour voir les détails 👩‍💻</Text>
      <FlatList
        data={COURSES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            style={({ pressed }) => [styles.item, pressed && styles.pressed]}
            onPress={() => handlePress(item)}
          >
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.desc}>{item.description}</Text>
          </Pressable>
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffe4ec",
    paddingTop: 32,
  },
  coverContainer: {
    flex: 1,
    backgroundColor: "#ffe4ec",
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  coverTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#c2185b",
    marginBottom: 16,
    textAlign: "center",
  },
  coverSubtitle: {
    fontSize: 20,
    color: "#c2185b",
    marginBottom: 12,
    textAlign: "center",
    fontWeight: "bold",
  },
  coverDesc: {
    fontSize: 16,
    color: "#555",
    marginBottom: 32,
    textAlign: "center",
  },
  coverButton: {
    backgroundColor: "#c2185b",
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 24,
  },
  coverButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#c2185b",
    textAlign: "center",
    marginBottom: 8,
  },
  subheader: {
    fontSize: 16,
    color: "#c2185b",
    textAlign: "center",
    marginBottom: 18,
  },
  list: {
    padding: 16,
  },
  item: {
    backgroundColor: "#fff0f6",
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#f8bbd0",
  },
  pressed: {
    opacity: 0.7,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 4,
    color: "#c2185b",
  },
  desc: {
    fontSize: 14,
    color: "#555",
  },
});
