import styled from "styled-components";

export const StyledGirdGallery = styled.div`
  margin: 5rem 0;

  .lg-react-element {
    display: grid;
    grid-template-columns: 45% 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 3rem;

    a span {
      height: 100% !important;
    }

    & :nth-child(2) {
      grid-row: 1 / 3;
      grid-column: 2;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 500ms ease;
  }

  .gallery-item {
    overflow: hidden;
    position: relative;
    min-height: 400px;

    i {
      position: absolute;
      left: 50%;
      top: 50%;
      z-index: 1;
      color: ${({ theme }) => theme.colors.white};
      transform: translate(-50%, -50%);
      opacity: 0;
      transition: opacity 500ms ease;

      svg {
        height: 5rem;
        width: 5rem;
      }
    }

    &::after {
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
      background-color: rgba(0, 0, 0, 0);
      left: 0;
      transition: background-color 500ms ease;
    }

    &:hover {
      img {
        transform: scale(1.1);
      }

      i {
        opacity: 1;
      }

      &.gallery-item::after {
        background-color: rgba(0, 0, 0, 0.25);
      }
    }
  }
`;
