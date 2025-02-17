import { Link } from "expo-router";
import { View, Text, Image, Pressable } from "react-native";
import { styles } from "./styles/offers";
import { Entypo } from "@expo/vector-icons";
import Theme from "src/styles/theme";

export const Offers = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ofertas top</Text>
      <Image
        source={{
          uri: "https://www.superpet.pe/on/demandware.static/-/Library-Sites-SuperPetSharedLibrary/default/dwd78fba89/SuperPet/Homepage/2024/home/snack-home.jpg",
        }}
        style={styles.image}
      />
      <Link href="/category" asChild style={{ alignSelf: "flex-start" }}>
        <Pressable style={styles.linkContainer}>
          <Text style={styles.link}>Ver todo</Text>
          <Entypo name="chevron-right" size={24} color={Theme.colors.blue} />
        </Pressable>
      </Link>
    </View>
  );
};
