import styled from "styled-components";
import { Container, Wrapper } from "../Layout.styled";

export const StyledFooter = styled(Wrapper)`
  background-color: ${({ theme }) => theme.colors.gray};
  padding: 10rem 0 3rem;

  .start {
    align-items: start;
  }

  h5 {
    font-size: ${({ theme }) => theme.font.size.m};
    font-family: ${({ theme }) => theme.font.family.inter};
    font-weight: 400;
    text-transform: uppercase;
  }

  li {
    font-size: ${({ theme }) => theme.font.size.s};
    list-style: none;
    color: ${({ theme }) => theme.colors.grayDark};
    margin-top: 1rem;
  }

  .footer-social {
    grid-column: 4 / -1;
    justify-self: end;
  }
`;

export const StyledSubFooter = styled(Container)`
  box-shadow: 0px -1px 0px 0px #eaeaea;
  margin-top: 2rem;
  padding-top: 2rem;

  .copyright {
    grid-column: 2 / -1;
    margin-bottom: 0;
  }
`;
