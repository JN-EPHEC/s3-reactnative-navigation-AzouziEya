import { Stack } from "expo-router/stack";
import DrawerToggleButton from "expo-router/drawer";

export default function AllCoursesTab() {
  return (
    <Stack>
      <Stack.Screen
        name="courses/stack/CourseList"
        options={{
          headerTitle: "Liste des cours",
        }}
      />
      <Stack.Screen
        name="courses/stack/CourseDetail"
        options={{
          headerTitle: "Détail du cours",
        }}
      />
    </Stack>
  );
}
