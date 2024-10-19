import { View, Text } from "react-native";
import { styles } from "./styles/header";

export const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>YouStore</Text>
    </View>
  );
};
