import { View, Text } from "react-native";
import { categoryStyles } from "./styles/category";
import { FC } from "react";

interface CategoryProps {
  title: string;
}

export const Category: FC<CategoryProps> = ({ title }) => {
  return (
    <View style={categoryStyles.container}>
      <Text>{title}</Text>
    </View>
  );
};
