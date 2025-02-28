import { StaticImageData } from "next/image";
import ImageOne from "../../../../public/assets/home/photo01.jpg";
import ImageTwo from "../../../../public/assets/home/photo02.jpg";
import ImageThree from "../../../../public/assets/home/photo03.jpg";
import ImageFour from "../../../../public/assets/home/photo04.jpg";
import ImageFive from "../../../../public/assets/home/photo05.jpg";
import ImageSix from "../../../../public/assets/home/photo06.jpg";
import ImageSeven from "../../../../public/assets/home/photo07.jpg";
import ImageEight from "../../../../public/assets/home/photo08.jpg";
import ImageNine from "../../../../public/assets/home/photo09.jpg";

export interface ImageType {
  id: number;
  img: StaticImageData;
}

export const MockImages: ImageType[] = [
  { id: 1, img: ImageOne },
  { id: 2, img: ImageTwo },
  { id: 3, img: ImageThree },
  { id: 4, img: ImageFour },
  { id: 5, img: ImageFive },
  { id: 6, img: ImageSix },
  { id: 7, img: ImageSeven },
  { id: 8, img: ImageEight },
  { id: 9, img: ImageNine },
];
