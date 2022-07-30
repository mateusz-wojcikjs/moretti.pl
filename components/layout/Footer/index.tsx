import React from "react";
import { StyledFooter, StyledSubFooter } from "./Footer.styled";
import { Container, Grid } from "../Layout.styled";
import Button from "../../common/Button";

import Logo from "components/layout/Logo";
import Link from "next/link";

const Footer = () => {
  const date = new Date();

  return (
    <footer>
      <StyledFooter>
        <Container>
          <Grid colCount={5} gap={5} className="start">
            <div>
              <h5>Firma</h5>
              <ul>
                <li>
                  <Link href="/o-nas">O nas</Link>
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
            <div>Help</div>
            <div className="footer-social">
              <Button link="/kontakt" type="secondary" text="Kontakt" />
            </div>
          </Grid>
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
