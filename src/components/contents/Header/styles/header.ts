import { StyleSheet } from "react-native";
import Theme from "src/styles/theme";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: Theme.colors.primary,
  },
});
