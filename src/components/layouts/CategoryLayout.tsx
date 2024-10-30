import { Pressable, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Link } from "expo-router";

export default function CategoryLayout() {
  return (
    <View>
      <Link asChild href="/">
        <Pressable>
          <MaterialIcons name="home" size={24} color="black" />
        </Pressable>
      </Link>
    </View>
  );
}
