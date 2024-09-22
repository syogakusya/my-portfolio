"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import { works } from "../data/works";

export default function SwiperComponent() {
  return (
    <div className="border-b-4 border-black">
      <Swiper
        className="w-full mySwiper"
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        initialSlide={1}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
      >
        {works.map((work) => (
          <SwiperSlide key={work.id} className="max-w-2xl mx-auto">
            <Link href={`/works/${work.id}`}>
              <div className="relative w-full h-0 pb-[75%] overflow-hidden">
                {work.imageUrls && (
                  <Image
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src={`/${work.imageUrls[0]}`}
                    alt={work.title ?? ""}
                    width={800}
                    height={600}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                  <h3 className="text-xl font-bold">{work.title}</h3>
                  <p className="text-sm">{work.shortDescription}</p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
