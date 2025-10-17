import { Tabs } from "expo-router/tabs";

export default function CoursesDrawer() {
  return (
    <Tabs>
      <Tabs.Screen name="courses/tabs/AllCourses" options={{ tabBarLabel: "Tous les cours", title: "Tous les cours" }} />
      <Tabs.Screen name="courses/tabs/Wishlist" options={{ tabBarLabel: "Ma liste de souhaits", title: "Ma liste de souhaits" }} />
    </Tabs>
  );
}
