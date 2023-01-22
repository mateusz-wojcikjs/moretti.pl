import styled from "styled-components";

export const StyledLoadingSpinner = styled.div`
  width: 15px;
  height: 15px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  &:after {
    content: " ";
    display: block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.colors.lightBlack};
    border-color: ${({ theme }) => theme.colors.lightBlack} transparent
      ${({ theme }) => theme.colors.lightBlack} transparent;
    animation: lds-dual-ring 1.2s linear infinite;
    margin: 0;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
