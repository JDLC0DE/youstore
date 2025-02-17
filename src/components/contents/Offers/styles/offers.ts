import { StyleSheet } from "react-native";
import Theme from "src/styles/theme";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    rowGap: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: 700,
    lineHeight: 27.24,
  },
  image: {
    width: "100%",
    height: 154,
    borderRadius: 8,
  },
  linkContainer: {
    flexDirection: "row",
    columnGap: 8,
    alignItems: "center",
  },
  link: {
    color: Theme.colors.blue,
    fontSize: 16,
    fontWeight: 600,
    lineHeight: 21.79,
  },
});
