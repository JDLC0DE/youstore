import { View, Text, Dimensions } from "react-native";
import { CarouselSlider } from "src/components/blocks/Carousel";
import { Category } from "../Category";
import { CATEGORIES } from "root/integration/data/constants/categories";

const width = Dimensions.get("window").width;

export default function CategoryRecommendation() {
  return (
    <View style={{ paddingLeft: 12, rowGap: 24 }}>
      <Text style={{ fontSize: 20, fontWeight: 700, lineHeight: 27.24 }}>
        Categorías
      </Text>
      <CarouselSlider
        slides={CATEGORIES}
        renderSlide={({ item }) => <Category title={item.name} />}
        carouselProps={{
          loop: false,
          width: width,
          height: 178,
          autoPlay: false,
          scrollAnimationDuration: 1000,
          customConfig() {
            return { type: "positive", viewCount: 1.2 };
          },
        }}
      />
    </View>
  );
}
