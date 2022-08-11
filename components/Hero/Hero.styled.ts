import styled from "styled-components";
import { PositionType } from "./index";

export const StyledHero = styled.header<{
  options: { offers?: boolean; offer?: boolean; position?: PositionType };
}>`
  position: relative;
  height: ${({ options }) => (options.offers ? "40rem" : "80rem")};
  grid-column: 1 / -1;
  display: flex;
  align-items: flex-end;
  padding-bottom: 10rem;

  img {
    object-position: ${({ options: { position } }) => position || "unset"};
  }
`;
