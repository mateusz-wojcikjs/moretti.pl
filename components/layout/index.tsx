import React from "react";
import Navbar from "./Navbar";
import Footer, { Company } from "./Footer";
import Cookies from "./Cookies";
import { GlobalStyle } from "assets/theme/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { index } from "assets/theme";
import { Wrapper } from "./Layout.styled";

import "aos/dist/aos.css";

interface LayoutProps {
  children: JSX.Element[] | JSX.Element;
  links: string[];
  company: Company;
}

const Layout = ({ children, links, company }: LayoutProps) => {
  return (
    <ThemeProvider theme={index}>
      <>
        <GlobalStyle />
        <Navbar />
        <Wrapper>{children}</Wrapper>
        <Footer links={links} company={company} />
        <Cookies />
      </>
    </ThemeProvider>
  );
};

export default Layout;
