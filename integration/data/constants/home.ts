import { ImageStyle, StyleProp } from "react-native";

export interface HomeCarouselItem {
  style: StyleProp<ImageStyle>;
  src: any;
}

const HOME_CAROUSEL_STYLE = {
  width: "100%",
  height: 310,
  objectFit: "fill",
} as StyleProp<ImageStyle>;

export const HOME_CAROUSEL_SLIDES: HomeCarouselItem[] = [
  {
    style: HOME_CAROUSEL_STYLE,
    src: require("../../../assets/banner/banner-1.jpg"),
  },
  {
    style: HOME_CAROUSEL_STYLE,
    src: require("../../../assets/banner/banner-2.jpg"),
  },
  {
    style: HOME_CAROUSEL_STYLE,
    src: require("../../../assets/banner/banner-3.jpg"),
  },
  {
    style: HOME_CAROUSEL_STYLE,
    src: require("../../../assets/banner/banner-4.jpg"),
  },
  {
    style: HOME_CAROUSEL_STYLE,
    src: require("../../../assets/banner/banner-5.jpg"),
  },
];
