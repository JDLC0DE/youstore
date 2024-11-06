import { View, Dimensions, Image } from "react-native";
import { CarouselSlider } from "src/components/blocks/Carousel";

export default function ContentCarousel() {
  const width = Dimensions.get("window").width;
  return (
    <CarouselSlider
      loop
      width={width}
      height={310}
      autoPlay={true}
      data={[...new Array(6).keys()]}
      scrollAnimationDuration={1000}
      renderItem={({ index }) => (
        <View
          style={{
            flex: 1,
            borderWidth: 1,
            justifyContent: "center",
          }}
        >
          <Image
            source={{
              uri: `https://picsum.photos/seed/${index}/200/310`,
            }}
            style={{
              width: "100%",
              height: 310,
              objectFit: "cover",
            }}
          />
        </View>
      )}
    />
  );
}
