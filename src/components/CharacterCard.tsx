import { View, Text, Image, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const CharacterCard = ({ character }: { character: any }) => {
  return (
    <View style={styles.cardContainer}>
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
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#272b33",
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
    objectFit: "fill",
  },
  cardInfo: {
    padding: 10,
    gap: 10,
    width: (width - 30) / 2,
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
