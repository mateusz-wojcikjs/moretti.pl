import styled from "styled-components";
import { Grid } from "../../layout/Layout.styled";
import breakpoints from "assets/theme/breakpoints";

export const StyledFeatures = styled(Grid)`
  align-items: center;

  @media only screen and ${breakpoints.device.sm} {
    grid-row-gap: 2.5rem;
  }

  .features-box {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2.5rem 0.5rem;
    @media only screen and ${breakpoints.device.xs} {
      grid-template-columns: 1fr;
    }
  }

  .features-cta h3 {
    margin-bottom: 3rem;
  }

  .feature-description {
    font-size: ${({ theme }) => theme.font.size.m};
    color: ${({ theme }) => theme.colors.grayDark};
  }

  h4 {
    font-weight: 400;
  }
`;
export const Feature = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 6rem 1fr;

  .feature-icon {
    grid-row: 1 / span 2;
    fill: ${({ theme }) => theme.colors.gray};
    stroke: ${({ theme }) => theme.colors.black};
  }
`;
