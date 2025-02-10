import { View } from "react-native";
import { useCallback, useState } from "react";
import Carousel, { CarouselRenderItem } from "react-native-reanimated-carousel";

import { CarouselDots } from "./parts/CarouselDots";
import { CustomConfig } from "react-native-reanimated-carousel/lib/typescript/types";

interface CarouselOptions {
  loop?: boolean;
  width: number;
  height?: number;
  autoPlay?: boolean;
  scrollAnimationDuration?: number;
  customConfig?: () => CustomConfig;
}

interface CarouselSliderProps<T> {
  slides: T[];
  dotsMarginBottom?: number;
  carouselProps: CarouselOptions;
  renderSlide: CarouselRenderItem<T>;
}

export const CarouselSlider = <T,>({
  slides,
  renderSlide,
  carouselProps,
  dotsMarginBottom,
}: CarouselSliderProps<T>) => {
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
        renderItem={renderSlide}
        onProgressChange={handleProgressChange}
        {...carouselProps}
      />
      <View
        style={{
          height: 10,
          marginBottom: dotsMarginBottom,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CarouselDots length={slides.length} currentIndex={index} />
      </View>
    </View>
  );
};
