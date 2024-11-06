import { View, ActivityIndicator, FlatList, Text } from "react-native";

import { useCategoriesQuery } from "root/integration/generated/hooks/categories";
import { AnimatedCharacterCard } from "../blocks/ProductCard";
import ContentCarousel from "../contents/ContentCarousel";
import Theme from "src/styles/theme";

export default function HomeLayout() {
  const { data, loading, error } = useCategoriesQuery();
  const categories = data?.categories.slice(0, 20) ?? [];

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Theme.colors.white,
        /* justifyContent: categories.length === 0 ? "center" : undefined,
        alignItems: categories.length === 0 ? "center" : undefined, */
      }}
    >
      <ContentCarousel />
      <Text style={{ fontSize: 30, fontWeight: 900 }}>Hola</Text>
      {/* {categories.length > 0 ? (
        <FlatList
          data={categories}
          style={{ paddingHorizontal: 10 }}
          contentContainerStyle={{ gap: 10 }}
          keyExtractor={(character) => character.id}
          renderItem={({ item, index }) => (
            <AnimatedCharacterCard
              id={item.id}
              index={index}
              img={item.image}
              name={item.name}
            />
          )}
          indicatorStyle="white"
        />
      ) : (
        <ActivityIndicator size="large" />
      )} */}
    </View>
  );
}
