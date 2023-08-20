import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

export default function Slider() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex flex-col gap-4">
            <img src="/images/team/Image.png" alt="" />
            <span className="span_name">Robert C. Simmons</span>
            <span className="consultant">Business Consultant</span>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col gap-4">
            <img src="/images/team/Image 2.png" alt="" />
            <span className="span_name">Christopher L. Wagner</span>
            <span className="consultant">Senior Manager</span>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col gap-4">
            <img src="/images/team/Image 3.png" alt="" />
            <span className="span_name">Lawrence C. Dickerson</span>
            <span className="consultant">Financial Consultant</span>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:flex  flex-col gap-4">
            <img src="/images/team/Image.png" alt="" />
            <span className="span_name">Robert C. Simmons</span>
            <span className="consultant">Business Consultant</span>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:flex flex-col gap-4">
            <img src="/images/team/Image 2.png" alt="" />
            <span className="span_name">Christopher L. Wagner</span>
            <span className="consultant">Senior Manager</span>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col gap-4">
            <img src="/images/team/Image 3.png" alt="" />
            <span className="span_name">Lawrence C. Dickerson</span>
            <span className="consultant">Financial Consultant</span>
          </div>{" "}
        </SwiperSlide>
      </Swiper>
    </>
  );
}
