import React, { MouseEventHandler, useEffect, useState } from "react"; // Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/zoom";

// If you want you can use SCSS instead of css
// import plugins if you need
import { StyledSlider } from "./Slider.styled";
import Image from "next/image";
import { ImageProps } from "interfaces/product.interface";
import styled from "styled-components";
import { Portal } from "next/dist/client/portal";
import { useImageViewer } from "react-image-viewer-hook";

export const Test = styled(SwiperSlide);

const Slider = ({
  content,
}: {
  content: ImageProps[];
  getOnClick?: (src: string) => MouseEventHandler<HTMLAnchorElement>;
}) => {
  const [slidesCount, setSlidesCount] = useState(4);
  const [windowWidth, setWindowWidth] = useState(1000);
  const { getOnClick, ImageViewer } = useImageViewer();

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
    <>
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
            const img =
              process.env.BASE_URL + image.attributes.formats.small.url;
            const original = process.env.BASE_URL + image.attributes.url;
            return (
              <SwiperSlide
                key={image.attributes.hash}
                style={{ cursor: "zoom-in" }}
              >
                <a
                  className="gallery-item slider-item"
                  onClick={getOnClick(original)}
                >
                  <Image
                    className="responsive-cover-img"
                    src={img}
                    height={600}
                    width={600}
                    alt={image.attributes.alternativeText}
                  />
                </a>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </StyledSlider>
      <Portal type="string">
        <ImageViewer />
      </Portal>
    </>
  );
};
export default Slider;
