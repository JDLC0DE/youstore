import { View, Text, Dimensions } from "react-native";
import { CarouselSlider } from "src/components/blocks/Carousel";
import { Category } from "../Category";

export default function CategoryRecommendation() {
  const width = Dimensions.get("window").width;

  return (
    <View style={{ paddingLeft: 12, rowGap: 24 }}>
      <Text style={{ fontSize: 20, fontWeight: 700, lineHeight: 27.24 }}>
        Categorías
      </Text>
      <CarouselSlider
        slides={Array.from({ length: 5 })}
        renderSlide={() => <Category />}
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
