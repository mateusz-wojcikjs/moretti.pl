import styled from "styled-components";
import breakpoints from "assets/theme/breakpoints";

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

export const Section = styled.section`
  grid-column: full-start / full-end;
  padding-top: 7.5rem;
  padding-bottom: 7.5rem;
  width: 100%;
`;

export const Container = styled.div`
  padding: 0 1.5rem;
  grid-column: container-start / container-end;

  p {
    font-size: ${({ theme }) => theme.font.size.m};
    margin-bottom: 1.5rem;
  }
`;

export const GridContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;
