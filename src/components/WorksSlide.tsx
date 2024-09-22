"use client";
import React from "react";
import Image from "next/image";

import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

export default function SwiperComponent() {
  return (
    <>
      <Swiper
        className="w-full mySwiper"
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
      >
        <SwiperSlide className="max-w-2xl mx-auto"> {/* max-widthとmarginを追加 */}
          <Image
            className="block w-full h-auto object-cover"
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            alt="Nature 1"
            width={800}
            height={600}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </SwiperSlide>
        <SwiperSlide>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
