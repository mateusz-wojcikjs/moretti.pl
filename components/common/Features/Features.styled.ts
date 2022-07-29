import styled from "styled-components";
import { Grid } from "../../layout/Layout.styled";

export const StyledFeatures = styled(Grid)`
  .features-box {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem 0.5rem;
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
  grid-template-columns: 6rem 1fr;
  grid-template-rows: 1fr 1fr;

  .feature-icon {
    grid-row: 1 / span 2;
    fill: ${({ theme }) => theme.colors.gray};
    stroke: ${({ theme }) => theme.colors.black};
  }
`;
