import Theme from "src/styles/theme";
import { StyleSheet } from "react-native";

export const categoryStyles = StyleSheet.create({
  container: {
    borderRadius: 8,
    height: 154,
    backgroundColor: Theme.colors.white,
    // Sombras para iOS
    shadowColor: "#212529",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    // Sombras para Android
    elevation: 5,
  },
});
