import styled from "styled-components";

export const StyledGirdGallery = styled.div`
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
  }
`;
