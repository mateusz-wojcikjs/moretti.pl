import styled from "styled-components";

export const StyledProductItem = styled.div`
  max-width: 42rem;
  overflow: hidden;
  cursor: pointer;

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
    color: ${({ theme }) => theme.colors.white};
    position: relative;

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
      height: 9rem;
      width: 9rem;
      border-radius: 50%;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, -50%);

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
