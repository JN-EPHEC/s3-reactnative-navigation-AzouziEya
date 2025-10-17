import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Page introuvable" }} />
      <View style={styles.container}>
        <Text style={styles.title}>Oups ! Cette page n'existe pas.</Text>
        <Text style={styles.desc}>Vérifiez l'URL ou utilisez le menu pour naviguer dans l'application.</Text>
  <Link href="/drawer/Courses" style={styles.link}>
          <Text style={styles.link}>Retour à l'accueil</Text>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#c00",
  },
  desc: {
    fontSize: 16,
    marginBottom: 18,
    color: "#555",
    textAlign: "center",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
    color: "#007aff",
    fontWeight: "bold",
  },
});
