import { createGlobalStyle } from "styled-components";
import breakpoints from "./breakpoints";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
    @media only screen and ${breakpoints.device.lg} {
      font-size: 57.5%;
    }
  }

  *, *::after, *::before {
    box-sizing: inherit;
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body, a, button {
    font-family: 'IBM Plex Sans', sans-serif;
  }
`;
