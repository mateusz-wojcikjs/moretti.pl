import styled from "styled-components";

export const StyledTestimonials = styled.div`
  padding-top: 10rem;
  padding-bottom: 10rem;

  .swiper {
    width: 100%;
    height: 100%;

    .swiper-button-prev,
    .swiper-button-next {
      outline: none;
      border: none;
      width: 6.4rem;
      height: 6.4rem;
      color: #eaeaea;
      cursor: pointer;
      top: auto;
      bottom: 0;
    }

    .swiper-button-prev {
      background-color: ${({ theme }) => theme.colors.primary};
      left: 0;
    }

    .swiper-button-next {
      background-color: ${({ theme }) => theme.colors.black};
      left: 6.4rem;
    }
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  h4 {
    color: ${({ theme }) => theme.colors.grayDark};
    font-size: ${({ theme }) => theme.font.size.m};
    text-transform: uppercase;
    font-weight: 400;
  }
`;

export const SliderItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
`;

export const SliderLogo = styled.div`
  max-width: 20rem;
  width: 100%;
  height: 7.5rem;
  display: flex;
  align-items: center;

  .item {
    display: block;
    width: 100%;
    min-width: 100%;
  }
`;
export const SliderText = styled.div`
  max-width: 60rem;
  width: 100%;
  height: 25rem;
  margin-top: 2.5rem;

  p.content {
    font-family: ${({ theme }) => theme.font.family.inter};
    font-size: ${({ theme }) => theme.font.size.xl};
    color: ${({ theme }) => theme.colors.black};
    font-weight: bold;
    position: relative;

    &:before {
      content: "\\275D";
      position: absolute;
      top: 2rem;
      left: -1rem;
    }

    &:after {
      content: "\\275E";
      position: absolute;
      bottom: 0;
      right: 1rem;
    }
  }
`;
