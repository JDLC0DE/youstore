import { View, Text } from "react-native";
import Octicons from "@expo/vector-icons/Octicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function LocationSelector() {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 8,
        height: 40,
        alignItems: "center",
        padding: 12,
      }}
    >
      <Octicons name="location" size={16} color="black" />
      <Text style={{ fontSize: 12, fontWeight: 400, lineHeight: 16.34 }}>
        Av. Guardia Civil 123, San Isidro
      </Text>
      <MaterialIcons name="keyboard-arrow-down" size={16} color="black" />
    </View>
  );
}
