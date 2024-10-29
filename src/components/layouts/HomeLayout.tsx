import { StyleSheet, View, ActivityIndicator, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useCategoriesQuery } from "root/integration/generated/hooks/categories";
import { AnimatedCharacterCard } from "../blocks/ProductCard";
import { Header } from "../contents/Header";
import { Link } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function HomeLayout() {
  const insets = useSafeAreaInsets();
  const { data, loading, error } = useCategoriesQuery();
  const categories = data?.categories ?? [];

  return (
    <View
      style={{
        ...styles.container,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        justifyContent: categories.length === 0 ? "center" : undefined,
        alignItems: categories.length === 0 ? "center" : undefined,
      }}
    >
      <Header />
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#272b33",
    flex: 1,
  },
});
