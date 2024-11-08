import { useCallback, useState } from "react";
import Carousel from "react-native-reanimated-carousel";
import {
  View,
  Image,
  StyleProp,
  ViewStyle,
  ImageStyle,
  ImageSourcePropType,
} from "react-native";

import { CarouselDots } from "./parts/CarouselDots";

interface CarouselOptions {
  loop?: boolean;
  width: number;
  height?: number;
  autoPlay?: boolean;
  scrollAnimationDuration?: number;
}

interface Slide {
  src?: ImageSourcePropType;
  style?: StyleProp<ImageStyle>;
}

interface CarouselSliderProps {
  slides: Slide[];
  carouselProps: CarouselOptions;
  carouselSlideStyles?: StyleProp<ViewStyle>;
}

export const CarouselSlider = ({
  slides,
  carouselProps,
  carouselSlideStyles,
}: CarouselSliderProps) => {
  const [index, setIndex] = useState(0);

  const handleProgressChange = useCallback(
    (_: number, absoluteProgress: number) => {
      const roundedIndex = Math.round(absoluteProgress);
      let currentIndex = 0;

      if (roundedIndex < slides.length) {
        currentIndex = roundedIndex;
      } else if (roundedIndex === slides.length) {
        currentIndex = 0;
      }
      setIndex(currentIndex);
    },
    // eslint-disable-next-line prettier/prettier
    [slides.length]
  );

  return (
    <View
      style={{
        height: carouselProps.height,
      }}
    >
      <Carousel
        data={slides}
        renderItem={({ item }) => (
          <View style={carouselSlideStyles}>
            <Image source={item.src} style={item.style} />
          </View>
        )}
        onProgressChange={handleProgressChange}
        {...carouselProps}
      />
      <View
        style={{
          height: 10,
          marginBottom: 16,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CarouselDots length={slides.length} currentIndex={index} />
      </View>
    </View>
  );
};
