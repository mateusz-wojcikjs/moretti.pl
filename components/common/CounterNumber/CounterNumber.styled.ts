import { Grid } from "../../layout/Layout.styled";
import styled from "styled-components";
import breakpoints from "../../../assets/theme/breakpoints";

export const StyledCounterNumber = styled(Grid)`
  text-align: center;
  margin-top: 10rem;

  .counter-number {
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.font.size.xxxl};
    font-weight: bold;
    font-family: ${({ theme }) => theme.font.family.inter};
    @media only screen and ${breakpoints.device.sm} {
      font-size: ${({ theme }) => theme.font.size.xxl};
    }
  }
`;
