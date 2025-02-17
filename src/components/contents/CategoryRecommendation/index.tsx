import { View, Text } from "react-native";
import { CarouselSlider } from "src/components/blocks/Carousel";
import { Category } from "../Category";
import { CATEGORIES } from "root/integration/data/constants/categories";
import { CATEGORY_WIDTH } from "../Category/styles/category";
import { WINDOW_WIDTH } from "root/integration/data/constants/system";

const OFFSET = WINDOW_WIDTH - CATEGORY_WIDTH - 16;

export const CategoryRecommendation = () => (
  <View style={{ paddingLeft: 12, rowGap: 24 }}>
    <Text style={{ fontSize: 20, fontWeight: 700, lineHeight: 27.24 }}>
      Categorías
    </Text>
    <CarouselSlider
      slides={CATEGORIES}
      renderSlide={({ item }) => <Category title={item.name} />}
      carouselProps={{
        loop: false,
        width: WINDOW_WIDTH,
        height: 178,
        autoPlay: false,
        scrollAnimationDuration: 1000,
        mode: "parallax",
        modeConfig: {
          parallaxAdjacentItemScale: 1,
          parallaxScrollingOffset: OFFSET,
          parallaxScrollingScale: 1,
        },
      }}
    />
  </View>
);
