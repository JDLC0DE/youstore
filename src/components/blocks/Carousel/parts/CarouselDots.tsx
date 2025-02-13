import { FC } from "react";
import { View } from "react-native";
import Theme from "src/styles/theme";

interface CarouselDotsProps {
  length: number;
  currentIndex: number;
  color?: "light" | "dark";
}

export const CarouselDots: FC<CarouselDotsProps> = ({
  color,
  length,
  currentIndex,
}) => {
  const dots = Array.from({ length }, (_, i) => i);
  return (
    <View style={{ flexDirection: "row", gap: 16 }}>
      {dots.map((index) => (
        <View
          key={index}
          style={{
            width: index === currentIndex ? 32 : 8,
            height: 8,
            backgroundColor:
              index === currentIndex
                ? Theme.colors.primary
                : color === "dark"
                  ? Theme.colors.grey[100]
                  : Theme.colors.white,
            borderRadius: 4,
          }}
        />
      ))}
    </View>
  );
};
