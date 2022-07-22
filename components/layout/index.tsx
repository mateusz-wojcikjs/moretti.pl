import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { GlobalStyle } from "assets/theme/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { index } from "assets/theme";

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const Layout = ({ children }: Props) => {
  return (
    <ThemeProvider theme={index}>
      <>
        <GlobalStyle />
        <Navbar />
        <main>{children}</main>
        {/*<Wrapper>{children}</Wrapper>*/}
        <Footer />
      </>
    </ThemeProvider>
  );
};

export default Layout;
