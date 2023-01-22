import styled from "styled-components";

export const StyledSlider = styled.div`
  min-height: 20rem;
  display: flex;
  align-items: center;

  .swiper {
    padding-bottom: 12.5rem;
    width: 100%;
    height: 100%;

    .slider-item {
      height: 50rem;
      display: block;
      width: 100%;
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

  .swiper-pagination {
    bottom: 60px;
  }

  .swiper-pagination-bullet {
    border-radius: 0;
    height: 2rem;
    width: 2rem;

    &.swiper-pagination-bullet-active {
      background-color: ${({ theme }) => theme.colors.secondary};
    }
  }

  .swiper-button-next {
    background-color: ${({ theme }) => theme.colors.primary};
    left: calc(50% + 10rem);
  }

  .swiper-button-prev {
    background-color: ${({ theme }) => theme.colors.black};
    right: calc(50% + 10rem);
    left: auto;
  }

  .swiper-button-next,
  .swiper-button-prev {
    top: 100%;
    transform: translateY(-150%);
    width: 5rem;
    height: 5rem;
    z-index: 11;

    &::after {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;
