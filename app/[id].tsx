import { Pressable, Text, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Link } from "expo-router";
import { useLocalSearchParams } from "expo-router";

export default function ProductDetailt() {
  const { id } = useLocalSearchParams();
  return (
    <View style={{ paddingVertical: 100, paddingHorizontal: 20 }}>
      <Link asChild href="/">
        <Pressable>
          <MaterialIcons name="home" size={24} color="black" />
        </Pressable>
      </Link>
      <Text>El Producto: {id}</Text>
    </View>
  );
}
