import styled from "styled-components";
import breakpoints from "assets/theme/breakpoints";

export const StyledTextBox = styled.div`
  margin-bottom: 7.5rem;

  .text-with-image {
    .img-inside {
      display: grid;
      grid-template-columns: 66% 1fr;
      grid-gap: 5rem;

      @media only screen and ${breakpoints.device.m} {
        grid-template-columns: 1fr 1fr;
      }
      @media only screen and ${breakpoints.device.sm} {
        grid-template-columns: 1fr;
      }

      .content-image {
        grid-column: 2;
      }
    }
  }

  p {
    color: ${({ theme }) => theme.colors.lightBlack};
  }

  h2 {
    font-size: ${({ theme }) => theme.font.size.xl};
    font-weight: 400;
    margin-bottom: 5rem;
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.font.family.bebasNeue};
    position: relative;
    display: inline-block;

    &:after {
      content: "";
      background: ${({ theme }) => theme.colors.secondaryAccent};
      height: 3px;
      width: 33%;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin-bottom: 2rem;
  }
`;
