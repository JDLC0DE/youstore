import { useEffect, useState } from "react";
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

export default function Main() {
  const [characters, setCharacters] = useState<any[]>([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <View
      style={{
        ...styles.container,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        justifyContent: characters.length === 0 ? "center" : undefined,
        alignItems: characters.length === 0 ? "center" : undefined,
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
      {characters.length > 0 ? (
        <FlatList
          data={characters}
          style={{ paddingHorizontal: 10 }}
          contentContainerStyle={{ gap: 10 }}
          keyExtractor={(character) => character.id}
          renderItem={({ item, index }) => (
            <AnimatedCharacterCard index={index} character={item} />
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
