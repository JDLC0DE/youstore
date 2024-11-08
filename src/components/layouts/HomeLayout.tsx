import { View, Text } from "react-native";

import { useCategoriesQuery } from "root/integration/generated/hooks/categories";
import ContentCarousel from "../contents/ContentCarousel";
import Theme from "src/styles/theme";
import LocationSelector from "../contents/LocationSelector";
import CategoryRecommendation from "../contents/CategoryRecommendation";

{
  /* {categories.length > 0 ? (
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
      )} */
}

export default function HomeLayout() {
  const { data, loading, error } = useCategoriesQuery();
  const categories = data?.categories.slice(0, 20) ?? [];

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Theme.colors.white,
      }}
    >
      <LocationSelector />
      <View style={{ gap: 40 }}>
        <ContentCarousel />
        <CategoryRecommendation />
      </View>
    </View>
  );
}
