import styled from "styled-components";

export const StyledImg = styled.div`
  box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.2);
  position: relative;
`;

export const GreenCross = styled.div`
  position: absolute;
  top: -100px;
  left: 100%;

  &::before,
  &::after {
    content: "";
    position: absolute;
    background-color: ${({ theme }) => theme.colors.secondaryAccent};
    height: 15px;
    width: 250px;
  }

  &::before {
    transform: rotate(90deg);
    left: -60px;
    top: 100px;
  }

  &::after {
    left: -120px;
    top: 40px;
  }
`;
export const RedCross = styled.div`
  position: absolute;
  bottom: -100px;
  left: -120px;

  &::before,
  &::after {
    content: "";
    position: absolute;
    background-color: ${({ theme }) => theme.colors.primaryLight};
    height: 15px;
    width: 250px;
  }

  &::before {
    transform: rotate(90deg);
    left: -60px;
    top: -100px;
  }

  &::after {
    top: -40px;
  }
`;
