import styled from "styled-components";
import breakpoints from "../../../assets/theme/breakpoints";

export const StyledAboutCta = styled.div`
  grid-column: full-start / full-end;

  height: 40vh;
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr minmax(50rem, 60%) 1fr;
  margin-top: 15rem;
  min-height: 60rem;

  @media only screen and ${breakpoints.device.sm} {
    grid-template-columns: 2.5rem repeat(4, 1fr) 2.5rem;
  }

  .cta-bg {
    position: relative;
    grid-column: 1 / 4;
    grid-row: 1 / 3;
    @media only screen and ${breakpoints.device.sm} {
      grid-column: 1 / -1;
      grid-row: 1 / -1;
    }
  }

  .cta-container {
    background: ${({ theme }) => theme.colors.lightBlack};
    grid-column: 3 / -1;
    grid-row: 2 / 4;

    display: flex;
    flex-direction: column;
    justify-content: center;

    @media only screen and ${breakpoints.device.sm} {
      grid-column: 2 / -1;
      grid-row: 2;
    }
  }

  .cta-wrapper {
    padding: 7.5rem 15rem;
    max-width: 120rem;

    @media only screen and ${breakpoints.device.m} {
      padding: 5rem 5rem;
    }

    @media only screen and ${breakpoints.device.sm} {
      padding: 2.5rem;
    }

    h3 {
      color: ${({ theme }) => theme.colors.white};
      position: relative;
      padding: 0;
      margin-left: 12px;

      @media only screen and ${breakpoints.device.sm} {
        margin-left: 0;
      }

      &::after {
        content: "";
        position: absolute;
        height: 37px;
        width: 3px;
        display: block;
        background: ${({ theme }) => theme.colors.primary};
        top: calc(50% - 3px);
        left: -10px;
        transform: translateY(-50%);

        @media only screen and ${breakpoints.device.sm} {
          display: none;
        }
      }
    }

    .bar {
      height: 1px;
      box-shadow: 1px 1px 1px rgba(255, 255, 255, 0.2);
    }

    .icons-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 2.5rem;
      @media only screen and ${breakpoints.device.sm} {
        grid-template-columns: 1fr;
        grid-gap: 0.5rem;
      }

      .icon-box {
        display: flex;
        color: ${({ theme }) => theme.colors.white};
        max-height: 7.5rem;
        margin-top: 2.5rem;
      }

      svg {
        stroke: ${({ theme }) => theme.colors.white};
        fill: transparent;
        //fill: ${({ theme }) => theme.colors.white};
        margin-right: 1.5rem;
      }

      h4 {
        font-size: ${({ theme }) => theme.font.size.l};
        font-family: ${({ theme }) => theme.font.family.bebasNeue};
      }

      p {
        font-size: ${({ theme }) => theme.font.size.m};
        color: inherit;
      }
    }
  }
`;
