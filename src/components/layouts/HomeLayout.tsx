import { View, ActivityIndicator, FlatList } from "react-native";

import { useCategoriesQuery } from "root/integration/generated/hooks/categories";
import { AnimatedCharacterCard } from "../blocks/ProductCard";
import { Link } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function HomeLayout() {
  const { data, loading, error } = useCategoriesQuery();
  const categories = data?.categories.slice(0, 20) ?? [];

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#272b33",
        justifyContent: categories.length === 0 ? "center" : undefined,
        alignItems: categories.length === 0 ? "center" : undefined,
      }}
    >
      <Link href="/category" style={{ marginVertical: 10 }}>
        <MaterialIcons name="info" size={24} color="white" />
      </Link>
      {categories.length > 0 ? (
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
      )}
    </View>
  );
}
