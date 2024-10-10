import { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView, ActivityIndicator } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CharacterCard } from "./components/CharacterCard";

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
      {characters.length > 0 ? (
        <ScrollView style={{ paddingHorizontal: 30 }}>
          {characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </ScrollView>
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
