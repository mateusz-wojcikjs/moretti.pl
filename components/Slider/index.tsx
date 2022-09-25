import React, { useEffect, useState } from "react"; // Import Swiper React components
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
// import plugins if you need
import { StyledSlider } from "./Slider.styled";
import Image from "next/image";
import { ImageProps } from "../../interfaces/product.interface";

const Slider = ({ content }: { content: ImageProps[] }) => {
  const [slidesCount, setSlidesCount] = useState(4);
  const [windowWidth, setWindowWidth] = useState(1000);

  const handleResize = () => setWindowWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    window.innerWidth > 1200 && setSlidesCount(4);
    window.innerWidth <= 1400 && setSlidesCount(3);
    window.innerWidth <= 800 && setSlidesCount(2);
  }, [windowWidth]);

  return (
    <StyledSlider>
      <Swiper
        slidesPerView={slidesCount}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        navigation={true}
      >
        {content.map((image) => {
          const img = process.env.BASE_URL + image.attributes.formats.small.url;
          return (
            <SwiperSlide key={image.attributes.hash}>
              <div className="slider-item">
                <Image
                  src={img}
                  layout="fill"
                  alt={image.attributes.alternativeText}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </StyledSlider>
  );
};

export default Slider;
