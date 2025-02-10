import { Dimensions, Image, View } from "react-native";
import { CarouselRenderItem } from "react-native-reanimated-carousel";
import {
  HOME_CAROUSEL_SLIDES,
  HomeCarouselItem,
} from "root/integration/data/constants/home";
import { CarouselSlider } from "src/components/blocks/Carousel";

export default function ContentCarousel() {
  const width = Dimensions.get("window").width;

  const renderSlide: CarouselRenderItem<HomeCarouselItem> = ({ item }) => (
    <View>
      <Image source={item.src} style={item.style} />
    </View>
  );

  return (
    <CarouselSlider
      slides={HOME_CAROUSEL_SLIDES}
      renderSlide={renderSlide}
      dotsMarginBottom={16}
      carouselProps={{
        loop: true,
        width,
        height: 310,
        autoPlay: true,
        scrollAnimationDuration: 1000,
      }}
    />
  );
}
