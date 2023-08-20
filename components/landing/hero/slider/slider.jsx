import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function Slider() {
  return (
    <>
      <Swiper
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
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="md:flex hidden flex-col gap-4">
            <img src="/images/team/image.png" alt="" />
            <span className="span_name">Robert C. Simmons</span>
            <span className="consultant">Business Consultant</span>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:flex hidden flex-col gap-4">
            <img src="/images/team/image 2.png" alt="" />
            <span className="span_name">Christopher L. Wagner</span>
            <span className="consultant">Senior Manager</span>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col gap-4">
            <img src="/images/team/image 3.png" alt="" />
            <span className="span_name">Lawrence C. Dickerson</span>
            <span className="consultant">Financial Consultant</span>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:flex hidden flex-col gap-4">
            <img src="/images/team/image.png" alt="" />
            <span className="span_name">Robert C. Simmons</span>
            <span className="consultant">Business Consultant</span>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:flex hidden flex-col gap-4">
            <img src="/images/team/image 2.png" alt="" />
            <span className="span_name">Christopher L. Wagner</span>
            <span className="consultant">Senior Manager</span>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col gap-4">
            <img src="/images/team/image 3.png" alt="" />
            <span className="span_name">Lawrence C. Dickerson</span>
            <span className="consultant">Financial Consultant</span>
          </div>{" "}
        </SwiperSlide>
      </Swiper>
    </>
  );
}
