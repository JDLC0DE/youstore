import { View } from "react-native";
import { styles } from "./styles/header";
import { SvgUri } from "react-native-svg";
import { MaterialIcons } from "@expo/vector-icons";
import Theme from "src/styles/theme";

export const Header = () => {
  return (
    <View style={styles.container}>
      <SvgUri
        uri="https://www.superpet.pe/on/demandware.static/Sites-SuperPet-Site/-/default/dwb07b4afd/fonts/logo_superpet.svg"
        width={144}
        height={32}
      />
      <MaterialIcons name="search" size={24} color={Theme.colors.white} />
    </View>
  );
};
