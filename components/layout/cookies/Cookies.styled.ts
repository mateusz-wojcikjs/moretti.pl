import styled from "styled-components";

export const StyledCookies = styled.div<{ className: string }>`
  position: fixed;
  bottom: 5vh;
  left: 5vw;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 999;
  padding: 5rem;
  border-radius: 5px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  max-width: 70vw;
  opacity: 1;
  transition: opacity 300ms, transform 300ms, z-index 300ms 300ms,
    visibility 300ms 300ms;
  //@include tablet {
  //  max-width: 85vw;
  //}

  &.vanish {
    opacity: 0;
    transform: translateX(-200%);
    z-index: -1;
    visibility: hidden;
  }

  h4 {
    font-family: ${({ theme }) => theme.font.family.bebasNeue};
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 3rem;
    margin-bottom: 2rem;
  }

  p {
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.colors.white};

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
