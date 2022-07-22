import styled from "styled-components";
import { Container } from "../layout/Layout.styled";

export const StyledHero = styled(Container)`
  position: relative;
  height: 80rem;
  grid-column: 1 / -1;
`;

export const HeroContainer = styled(Container)`
  max-width: 140rem;
  margin: 0 auto;
  //padding: 0 1.5rem;
  width: 100%;
`;
