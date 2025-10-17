import { Drawer } from "expo-router/drawer";

export default function RootLayout() {
  return (
    <Drawer>
      <Drawer.Screen name="courses/stack/CourseList" options={{ drawerLabel: "Liste des cours", title: "Liste des cours" }} />
      <Drawer.Screen name="screens/PostListScreen" options={{ drawerLabel: "Posts du blog", title: "Posts du blog" }} />
      <Drawer.Screen name="profile/ProfileScreen" options={{ drawerLabel: "Mon Profil", title: "Mon Profil" }} />
      <Drawer.Screen name="courses/tabs/Wishlist" options={{ drawerLabel: "Wishlist", title: "Wishlist" }} />
    </Drawer>
  );
}
