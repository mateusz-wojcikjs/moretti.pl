import styled from "styled-components";
import breakpoints from "assets/theme/breakpoints";

interface GridProps {
  colCount: number;
  gap: number;
}

export const Wrapper = styled.main`
  width: 100%;
  display: grid;
  grid-template-columns:
    [full-start] 15px 1fr [container-start] minmax(70rem, 140rem)
    [container-end] 1fr 15px [full-end];
  margin: 0;
  padding: 0;
  @media only screen and ${breakpoints.device.xxl} {
    grid-template-columns:
      [full-start] 15px 1fr [container-start] minmax(57.5rem, 115rem)
      [container-end] 1fr 15px [full-end];
  }
  @media only screen and ${breakpoints.device.xl} {
    grid-template-columns:
      [full-start] 15px 1fr [container-start] minmax(50rem, 100rem)
      [container-end] 1fr 15px [full-end];
  }
  @media only screen and ${breakpoints.device.sm} {
    grid-template-columns:
      [full-start] 15px 1fr [container-start] minmax(14rem, 70rem)
      [container-end] 1fr 15px [full-end];
  }
`;

export const FullSectionGray = styled.section<{ pt5?: boolean }>`
  grid-column: full-start / full-end;
  padding-top: ${({ pt5 }) => (pt5 ? "20rem" : 0)};
  padding-bottom: ${({ pt5 }) => (pt5 ? "20rem" : 0)};
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray};
`;

export const Container = styled.div<{ pt5?: boolean }>`
  grid-column: container-start / container-end;
  position: relative;
  padding-top: ${({ pt5 }) => (pt5 ? "20rem" : 0)};
  padding-bottom: ${({ pt5 }) => (pt5 ? "20rem" : 0)};

  @media only screen and ${breakpoints.device.m} {
    padding-top: ${({ pt5 }) => (pt5 ? "10rem" : 0)};
    padding-bottom: ${({ pt5 }) => (pt5 ? "10rem" : 0)};
  }

  p {
    font-size: ${({ theme }) => theme.font.size.m};
    margin-bottom: 1.5rem;
  }

  .text-img {
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media only screen and ${breakpoints.device.xs} {
      grid-template-columns: 1fr;
    }
  }
`;

export const GridContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${({ colCount }: GridProps) =>
    `repeat(${colCount}, 1fr)`};
  grid-column-gap: ${({ gap }: GridProps) => `${gap}rem`};
  align-items: center;
  @media only screen and ${breakpoints.device.sm} {
    grid-template-columns: 1fr;
    grid-row-gap: 2.5rem;
  }
`;

export const StyledGridItems = styled(Grid)`
  @media only screen and ${breakpoints.device.sm} {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    row-gap: 2.5rem;
    justify-items: center;
  }
`;
export const StyledGridPartners = styled(Grid)`
  @media only screen and ${breakpoints.device.sm} {
    grid-template-columns: repeat(auto-fit, minmax(15rem, 25rem));
    row-gap: 2.5rem;
    justify-content: center;
    justify-items: center;
  }
`;
export const StyledGridFooter = styled(Grid)`
  @media only screen and ${breakpoints.device.sm} {
    grid-template-columns: repeat(auto-fit, minmax(11rem, 24rem));
    column-gap: 2.5rem;
    row-gap: 2.5rem;
  }
`;

export const InnerWrapper = styled.div`
  max-width: 140rem;
  margin: 0 auto;
  width: 100%;
  padding: 0 15px;
  @media only screen and ${breakpoints.device.xl} {
    max-width: 100rem;
  }
`;

// export const FullSection = s;
