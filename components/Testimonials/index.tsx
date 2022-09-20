import React from "react";
import {
  SliderItem,
  SliderLogo,
  SliderText,
  StyledTestimonials,
} from "./Testimonials.styled";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TestLogo from "assets/img/mediator.png";

import { Keyboard, Mousewheel, Navigation } from "swiper";
import Image from "next/image";
import AnimatedOnScroll from "../AnimatedOnScroll";

interface Testimonial {
  id: number;
  logo: string;
  company: string;
  content: string;
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
      {testimonials.map((testimonial: Testimonial) => (
        <SwiperSlide key={testimonial.id}>
          {" "}
          <SliderItem>
            <SliderLogo>
              <div className="item">
                <Image src={TestLogo} layout="responsive" />
              </div>
            </SliderLogo>

            <SliderText>
              <p className="content">{testimonial.content}</p>
            </SliderText>
          </SliderItem>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const Testimonials = () => {
  const data: Testimonial[] = [
    {
      id: 1,
      logo: "A",
      company: "Company 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium autem ducimus quasi quisquam repellat.",
    },
    {
      id: 2,
      logo: "B",
      company: "Company 2",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium autem ducimus quasi quisquam repellat.",
    },
    {
      id: 3,
      logo: "C",
      company: "Company 3",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium autem ducimus quasi quisquam repellat.",
    },
  ];

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
