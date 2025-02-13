import { ImageStyle, StyleProp } from "react-native";

export interface HomeCarouselItem {
  style: StyleProp<ImageStyle>;
  src: string;
  id: string;
}

const HOME_CAROUSEL_STYLE = {
  width: "100%",
  height: 310,
  objectFit: "fill",
} as StyleProp<ImageStyle>;

export const HOME_CAROUSEL_SLIDES: HomeCarouselItem[] = [
  {
    id: "hb-1",
    style: HOME_CAROUSEL_STYLE,
    src: "https://www.superpet.pe/on/demandware.static/-/Library-Sites-SuperPetSharedLibrary/default/dwe76ae8dc/SuperPet/Homepage/2025/mini_banner/san-valentin/san-valentin-antipulga-mobile.jpg",
  },
  {
    id: "hb-2",
    style: HOME_CAROUSEL_STYLE,
    src: "https://www.superpet.pe/on/demandware.static/-/Library-Sites-SuperPetSharedLibrary/default/dw3bde0003/SuperPet/Homepage/2025/mini_banner/san-valentin/san-valentin-catxtreme-mobile.jpg",
  },
  {
    id: "hb-3",
    style: HOME_CAROUSEL_STYLE,
    src: "https://www.superpet.pe/on/demandware.static/-/Library-Sites-SuperPetSharedLibrary/default/dwcff1609e/SuperPet/Homepage/2025/mini_banner/san-valentin/san-valentin-arena-mobile.jpg",
  },
  {
    id: "hb-4",
    style: HOME_CAROUSEL_STYLE,
    src: "https://www.superpet.pe/on/demandware.static/-/Library-Sites-SuperPetSharedLibrary/default/dw229d4d69/SuperPet/Homepage/2025/mini_banner/san-valentin/san-valentin-alimentos-mobile.jpg",
  },
  {
    id: "hb-5",
    style: HOME_CAROUSEL_STYLE,
    src: "https://www.superpet.pe/on/demandware.static/-/Library-Sites-SuperPetSharedLibrary/default/dwbda029ad/SuperPet/Homepage/2025/mini_banner/san-valentin/san-valentin-snacks-mobile.jpg",
  },
];
