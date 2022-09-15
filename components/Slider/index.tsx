import React from "react"; // Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/zoom";
// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
// If you want you can use SCSS instead of css
// import "lightgallery/scss/lightgallery.scss";
// import "lightgallery/scss/lg-zoom.scss";
// import plugins if you need
import { StyledSlider } from "./Slider.styled";

import img1 from "assets/img/wagi/IMG_2568.jpg";
import Image from "next/image";

const Slider = () => {
  return (
    <StyledSlider>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        navigation={true}
      >
        <SwiperSlide>
          <div className="slider-item">
            <Image src={img1} layout="fill" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-item">
            <Image src={img1} layout="fill" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-item">
            <Image src={img1} layout="fill" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-item">
            <Image src={img1} layout="fill" />
          </div>
        </SwiperSlide>
      </Swiper>
    </StyledSlider>
  );
};

export default Slider;

// <SwiperSlide>
//   <div className="slider-item">xd</div>
// </SwiperSlide>
// <SwiperSlide>
//   <div className="slider-item">s</div>
// </SwiperSlide>
// <SwiperSlide>
//   <div className="slider-item">
//     <Image src={img3} layout="fill" />
//   </div>
// </SwiperSlide>
