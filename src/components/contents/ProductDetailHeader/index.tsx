import { View, Text } from "react-native";
import { styles } from "./styles/product-detail-header";

export const ProductDetailHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Product Detail</Text>
    </View>
  );
};
