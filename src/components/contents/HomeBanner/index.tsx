import { Dimensions, Image, View } from "react-native";
import { CarouselRenderItem } from "react-native-reanimated-carousel";
import {
  HOME_CAROUSEL_SLIDES,
  HomeCarouselItem,
} from "root/integration/data/constants/home";
import { CarouselSlider } from "src/components/blocks/Carousel";

const width = Dimensions.get("window").width;

const renderSlide: CarouselRenderItem<HomeCarouselItem> = ({ item }) => (
  <View style={{ flex: 1 }}>
    <Image source={{ uri: item.src }} style={item.style} />
  </View>
);

export const HomeBanner = () => {
  return (
    <CarouselSlider
      slides={HOME_CAROUSEL_SLIDES}
      renderSlide={renderSlide}
      dotsMarginBottom={16}
      dotsColorVariant="light"
      carouselProps={{
        loop: true,
        width,
        height: 310,
        autoPlay: true,
        scrollAnimationDuration: 1000,
      }}
    />
  );
};
