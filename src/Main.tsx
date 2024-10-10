import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Main() {
  const [characters, setCharacters] = useState<any[]>([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <ScrollView
      style={{
        ...styles.container,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    >
      <View
        style={{
          gap: 20,
          flex: 1,
          paddingBottom: 100,
        }}
      >
        {characters.map((character) => (
          <View key={character.id} style={styles.cardContainer}>
            <Image source={{ uri: character.image }} style={styles.cardImage} />
            <View style={styles.cardInfo}>
              <View style={{ gap: 5 }}>
                <Text style={styles.cardTitle}>{character.name}</Text>
                <Text style={styles.cardStatus}>
                  {character.status} - {character.species}
                </Text>
              </View>
              <View style={{ gap: 5 }}>
                <Text style={styles.locationTitle}>Last known location:</Text>
                <Text style={styles.locationValue}>Jerryboree</Text>
              </View>
              <View style={{ gap: 5 }}>
                <Text style={styles.locationTitle}>First seen in:</Text>
                <Text style={styles.locationValue}>Mortynight Run</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#272b33",
    paddingHorizontal: 30,
  },
  cardContainer: {
    backgroundColor: "#3c3e44",
    borderRadius: 10,
    overflow: "hidden",
    height: "auto",
  },
  cardImage: {
    width: "100%",
    height: 320,
    objectFit: "cover",
  },
  cardInfo: {
    padding: 10,
    gap: 10,
  },
  cardTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  cardStatus: {
    color: "#fff",
    fontSize: 16,
  },
  locationTitle: {
    color: "#75929e",
    fontSize: 16,
  },
  locationValue: {
    color: "#fff",
    fontSize: 16,
  },
});
