import { Link } from "expo-router";
import { FC, useEffect, useRef } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Animated,
  Pressable,
} from "react-native";

// const { width } = Dimensions.get("window");

interface CharacterCardProps {
  id: string;
  img: string;
  name: string;
}

type AnimatedCharacterCardProps = CharacterCardProps & { index: number };

export const CharacterCard = ({ img, name, id }: CharacterCardProps) => {
  return (
    <Link asChild href={`/${id}`}>
      <Pressable>
        <View style={styles.cardContainer}>
          <Image source={{ uri: img }} style={styles.cardImage} />
          <View style={styles.cardInfo}>
            <View style={{ gap: 5 }}>
              <Text style={styles.cardTitle}>{name}</Text>
              <Text style={styles.cardStatus}>1 - 2</Text>
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
      </Pressable>
    </Link>
  );
};

export const AnimatedCharacterCard: FC<AnimatedCharacterCardProps> = ({
  index,
  ...props
}) => {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: index * 500,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <CharacterCard {...props} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
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
    height: 280,
    objectFit: "cover",
  },
  cardInfo: {
    padding: 10,
    gap: 10,
    width: "100%",
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
