import {
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  Text,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedCharacterCard } from "./components/CharacterCard";
import { Logo } from "./components/Logo";
import { useCategoriesQuery } from "root/integration/generated/hooks/categories";

export default function Main() {
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
      <View
        style={{
          height: 60,
          alignItems: "center",
          gap: 5,
          flexDirection: "row",
          paddingHorizontal: 10,
        }}
      >
        <Logo />
        <Text style={{ color: "#ffffff", fontSize: 25, fontWeight: 900 }}>
          Rick and Morty
        </Text>
      </View>
      {categories.length > 0 ? (
        <FlatList
          data={categories}
          style={{ paddingHorizontal: 10 }}
          contentContainerStyle={{ gap: 10 }}
          keyExtractor={(character) => character.id}
          renderItem={({ item, index }) => (
            <AnimatedCharacterCard
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
