import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { GlobalStyle } from "assets/theme/GlobalStyles";

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
