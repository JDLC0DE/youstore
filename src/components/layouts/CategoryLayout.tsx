import { Pressable, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Link } from "expo-router";

export default function CategoryLayout() {
  return (
    <View style={{ paddingVertical: 100, paddingHorizontal: 20 }}>
      <Link asChild href="/">
        <Pressable>
          <MaterialIcons name="home" size={24} color="black" />
        </Pressable>
      </Link>
    </View>
  );
}
