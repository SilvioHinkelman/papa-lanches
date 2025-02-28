"use client";

import Image from "next/image";
import { MockImages, ImageType } from "./MockImage";
import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";
import { EffectCreative, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";

const MySwiperComponent: React.FC = () => {
  const config: SwiperProps = {
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        //    shadow: true,
        translate: [0, 0, -400],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    modules: [EffectCreative, Autoplay],
    loop: true,
    speed: 1000,
  };

  return (
    <Swiper {...config}>
      {MockImages.map((image: ImageType) => (
        <SwiperSlide key={image.id}>
          <div className="flex justify-center items-center h-full">
            <Image
              alt="img"
              src={image.img}
              width={900}
              priority={true}
              className="object-fill rounded-2xl border-2 border-white"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MySwiperComponent;
