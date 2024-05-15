import styled from "styled-components";
import breakpoints from "../../../assets/theme/breakpoints";

export const StyledCta = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr minmax(40rem, 60%) 1fr;
  margin-top: 15rem;
  min-height: 50rem;

  @media only screen and ${breakpoints.device.sm} {
    margin-top: 10rem;
  }

  .cta-bg {
    position: relative;
    grid-column: 2 / -1;
    grid-row: 1 / -1;
    z-index: -1;

    @media only screen and ${breakpoints.device.sm} {
      grid-column: 1 / -1;
    }
  }

  .cta-container {
    grid-row: 2;
    grid-column: 1 / 3;
    background: ${({ theme }) => theme.colors.white};
    display: grid;
    grid-template-columns: 1fr 15px 60rem;

    margin-right: 10rem;

    @media only screen and ${breakpoints.device.sm} {
      grid-template-columns: 15px 1fr 15px;
      margin-right: 0;
      grid-column: 1 / -1;
    }

    @media only screen and ${breakpoints.device.xs} {
    }
  }

  .cta-content {
    grid-column: 3;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    padding: 6.5rem 0;
    background: ${({ theme }) => theme.colors.white};
    position: relative;

    @media only screen and ${breakpoints.device.sm} {
      //padding: .5rem 0;
      grid-column: 2;
    }

    h3 {
      margin-bottom: 3rem;

      @media only screen and ${breakpoints.device.sm} {
        margin-bottom: 1rem;
      }
    }

    .cta-description {
      margin-bottom: 2.5rem;
    }

    &:after {
      content: "";
      background: ${({ theme }) => theme.colors.white};
      height: 100%;
      width: 10rem;
      position: absolute;
      left: 100%;
      @media only screen and ${breakpoints.device.sm} {
        display: none;
      }
    }
  }
`;
