import { StyleSheet } from "react-native";
import Theme from "src/styles/theme";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    padding: 16,
    backgroundColor: Theme.colors.primary,
  },
  text: {
    color: Theme.colors.white,
    fontSize: 30,
    fontWeight: "bold",
  },
});
