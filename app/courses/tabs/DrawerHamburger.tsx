import React from "react";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function DrawerHamburger() {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.openDrawer()} style={{ marginLeft: 12 }}>
      <Ionicons name="menu" size={28} color="#333" />
    </Pressable>
  );
}