import { View } from "react-native";
import Carousel, { TCarouselProps } from "react-native-reanimated-carousel";
import { useCallback, useState } from "react";
import { CarouselDots } from "./parts/CarouselDots";

export const CarouselSlider = <T extends unknown>({
  height = 250,
  ...props
}: TCarouselProps<T>) => {
  const [index, setIndex] = useState(0);

  const handleProgressChange = useCallback(
    (_: number, absoluteProgress: number) => {
      const roundedIndex = Math.round(absoluteProgress);
      let currentIndex = 0;

      if (roundedIndex < props.data.length) {
        currentIndex = roundedIndex;
      } else if (roundedIndex === props.data.length) {
        currentIndex = 0;
      }
      setIndex(currentIndex);
    },
    [props.data.length],
  );

  return (
    <View
      style={{
        height,
      }}
    >
      <Carousel
        {...props}
        height={height}
        onProgressChange={handleProgressChange}
      />
      <View
        style={{
          height: 10,
          marginBottom: 16,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CarouselDots length={props.data.length} currentIndex={index} />
      </View>
    </View>
  );
};
