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
  @media only screen and ${breakpoints.device.sm} {
    grid-template-columns: [full-start] 15px 1fr 1fr 1fr 15px [full-end];
  }
`;

export const FullSectionGray = styled.section`
  grid-column: full-start / full-end;
  padding-top: 20rem;
  padding-bottom: 20rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray};
`;

export const Container = styled.div<{ pt5?: boolean }>`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  grid-column: container-start / container-end;

  padding-top: ${({ pt5 }) => (pt5 ? "20rem" : 0)};
  padding-bottom: ${({ pt5 }) => (pt5 ? "20rem" : 0)};

  p {
    font-size: ${({ theme }) => theme.font.size.m};
    margin-bottom: 1.5rem;
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
`;

export const InnerWrapper = styled.div`
  max-width: 140rem;
  margin: 0 auto;
  width: 100%;
`;

// export const FullSection = s;
