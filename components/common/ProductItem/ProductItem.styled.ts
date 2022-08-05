import styled from "styled-components";
import breakpoints from "../../../assets/theme/breakpoints";

export const StyledProductItem = styled.div`
  max-width: 42rem;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  min-width: 20rem;

  &:hover {
    .item-content:after {
      transform: scaleX(1.4);
    }

    .item-img {
      transform: scale(1.2);

      &:after {
        opacity: 0.15;
      }
    }

    .item-icon svg {
      stroke: ${({ theme }) => theme.colors.secondary};
    }
  }

  .item-img-mask {
    overflow: hidden;
  }

  .item-img {
    transition: transform 300ms ease;

    &:after {
      content: "";
      width: 100%;
      height: 100%;
      background: ${({ theme }) => theme.colors.primary};
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      transition: opacity 300ms ease;
    }
  }

  .item-content {
    width: 75%;
    margin: 0 auto;
    background: ${({ theme }) => theme.colors.primary};
    padding: 7.5rem;
    position: relative;
    @media only screen and ${breakpoints.device.xxl} {
      padding: 5rem 2.5rem;
    }
    @media only screen and ${breakpoints.device.xl} {
      padding: 5rem 1.5rem;
    }
    @media only screen and ${breakpoints.device.m} {
      width: 100%;
    }

    p {
      color: ${({ theme }) => theme.colors.white};
    }

    &:after {
      content: "";
      width: 100%;
      height: 100%;
      background: ${({ theme }) => theme.colors.primary};
      z-index: -1;
      position: absolute;
      top: 0;
      left: 0;
      transition: transform 300ms ease;
    }

    .item-title {
      font-size: ${({ theme }) => theme.font.size.l};
    }

    .item-icon {
      background: ${({ theme }) => theme.colors.white};
      fill: ${({ theme }) => theme.colors.white};
      stroke: ${({ theme }) => theme.colors.black};
      height: 8.5rem;
      width: 8.5rem;
      border-radius: 50%;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 1rem;

      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        transition: stroke 300ms ease;
      }
    }

    p {
      text-align: center;
    }
  }
`;
