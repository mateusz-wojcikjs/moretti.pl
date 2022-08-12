import React from "react";
import { StyledFooter, StyledSubFooter } from "./Footer.styled";
import { Container, Grid, StyledGridFooter } from "../Layout.styled";
import Button from "../../common/Button";

import Logo from "components/layout/Logo";
import Link from "next/link";

const Footer = () => {
  const date = new Date();

  return (
    <footer>
      <StyledFooter>
        <Container>
          <StyledGridFooter colCount={5} gap={5} className="start">
            <div>
              <h5>Firma</h5>
              <ul>
                <li>
                  <Link href="/o-firmie">O nas</Link>
                </li>
                <li>
                  <Link href="/kontakt">Kontakt</Link>
                </li>
              </ul>
            </div>
            <div>
              <h5>Oferta</h5>
              <ul>
                <li>
                  <Link href="/">Link</Link>
                </li>
                <li>
                  <Link href="/">Link</Link>
                </li>
                <li>
                  <Link href="/">Link</Link>
                </li>
                <li>
                  <Link href="/">Link</Link>
                </li>
              </ul>
            </div>
            <div className="footer-social">
              <Button
                link="/kontakt"
                type="secondary"
                text="Kontakt"
                size="l"
              />
              <address>
                <p>Moretti Macchine</p>
                <p>ul. Duńska 3</p>
                <p>64-100 Leszno</p>
                <p>
                  <a href="tel:664412061">+48 664 412 061</a>
                </p>
                <p>
                  <a href="mailto:moretti@moretti.pl">moretti@moretti.pl</a>
                </p>
              </address>
            </div>
          </StyledGridFooter>
        </Container>
        <StyledSubFooter>
          <Grid gap={1} colCount={6}>
            <Logo />
            <p className="copyright">
              Copyright {date.getFullYear()} © Moretti company. All right
              reserved.
            </p>
          </Grid>
        </StyledSubFooter>
      </StyledFooter>
    </footer>
  );
};

export default Footer;
