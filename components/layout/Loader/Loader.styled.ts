import styled from "styled-components";

export const StyledLoader = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  top: 0;

  #loader {
    position: absolute;
    top: 50%;
    left: 40%;
    margin-left: 10%;
    transform: translate3d(-50%, -50%, 0);
  }

  .loader-dot {
    width: 24px;
    height: 24px;
    background-color: ${({ theme }) => theme.colors.primary};
    display: inline-block;
    animation: slide 1s infinite;

    &:nth-child(even) {
      background-color: ${({ theme }) => theme.colors.primary};
    }

    &:nth-child(odd) {
      background-color: ${({ theme }) => theme.colors.secondary};
    }
  }

  .loader-dot:nth-child(1) {
    animation-delay: 0.1s;
  }

  .loader-dot:nth-child(2) {
    animation-delay: 0.2s;
  }

  .loader-dot:nth-child(3) {
    animation-delay: 0.3s;
  }

  .loader-dot:nth-child(4) {
    animation-delay: 0.4s;
  }

  .loader-dot:nth-child(5) {
    animation-delay: 0.5s;
  }

  @keyframes slide {
    0% {
      scale: 1;
      rotate: 0;
    }
    50% {
      opacity: 0.3;
      scale: 2;
      rotate: 90deg;
    }
    100% {
      scale: 1;
      rotate: 180deg;
    }
  }
`;
