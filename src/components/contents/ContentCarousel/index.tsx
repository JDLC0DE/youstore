import { Dimensions } from "react-native";
import { HOME_CAROUSEL_SLIDES } from "root/integration/data/constants/home";
import { CarouselSlider } from "src/components/blocks/Carousel";

export default function ContentCarousel() {
  const width = Dimensions.get("window").width;
  return (
    <CarouselSlider
      slides={HOME_CAROUSEL_SLIDES}
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
