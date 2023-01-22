import React from "react";
import Image from "next/image";
import AnimatedOnScroll from "components/AnimatedOnScroll";
import {
  SliderItem,
  SliderLogo,
  SliderText,
  StyledTestimonials,
} from "./Testimonials.styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Mousewheel, Navigation } from "swiper";
import { FileUrl } from "interfaces/page.interface";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface TestimonialAttributes {
  logo: FileUrl;
  companyName: string;
  content: string;
}

export interface Testimonial {
  id: number;
  attributes: TestimonialAttributes;
}

interface SliderProps {
  testimonials: Testimonial[];
}

const Slider = ({ testimonials }: SliderProps) => {
  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      scrollbar={true}
      loop={true}
      modules={[Navigation, Mousewheel, Keyboard]}
      className="mySwiper"
    >
      {testimonials.map((testimonial: Testimonial) => {
        const logo =
          process.env.BASE_URL +
          testimonial.attributes.logo.data.attributes.url;
        return (
          <SwiperSlide key={testimonial.id}>
            <SliderItem>
              <SliderLogo>
                <div className="item">
                  <Image
                    src={logo}
                    height={300}
                    width={300}
                    className="responsive-contain-img"
                    alt={testimonial.attributes.companyName}
                  />
                </div>
              </SliderLogo>
              <SliderText>
                <p className="content">{testimonial.attributes.content}</p>
              </SliderText>
            </SliderItem>
          </SwiperSlide>
        );
      })}
      ;
    </Swiper>
  );
};

const Testimonials = ({ data }: { data: Testimonial[] }) => {
  return (
    <AnimatedOnScroll>
      <StyledTestimonials>
        <h4>Opinie naszych klientów</h4>
        <Slider testimonials={data} />
      </StyledTestimonials>
    </AnimatedOnScroll>
  );
};

export default Testimonials;
