import Theme from "src/styles/theme";
import { StyleSheet } from "react-native";

export const CATEGORY_WIDTH = 279;

export const categoryStyles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    height: 154,
    width: CATEGORY_WIDTH,
    backgroundColor: Theme.colors.primary,
    // Sombras para iOS
    shadowColor: "#212529",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    // Sombras para Android
    elevation: 5,
  },
  category: { fontSize: 28, fontWeight: 600, color: Theme.colors.white },
});
