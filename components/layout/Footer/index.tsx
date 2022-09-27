import React from "react";
import { StyledFooter, StyledSubFooter } from "./Footer.styled";
import { Container, Grid, StyledGridFooter } from "../Layout.styled";
import Button from "../../common/Button";

import Logo from "components/layout/Logo";
import Link from "next/link";
import slugify from "slugify";

export interface Company {
  companyName: string;
  firstAddressLine: string;
  secondAddressLine: string;
  phoneNumber: string;
  emailAddress: string;
}

interface FooterProps {
  links: string[];
  company: Company;
}

const Footer = ({ links, company }: FooterProps) => {
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
                  <Link href="/">Strona główna</Link>
                </li>
                <li>
                  <Link href="/o-firmie">O nas</Link>
                </li>
                <li>
                  <Link href="/oferta">Oferta</Link>
                </li>
                <li>
                  <Link href="/kontakt">Kontakt</Link>
                </li>
                <li>
                  <Link href="/privacy">Polityka prywatności</Link>
                </li>
              </ul>
            </div>
            <div>
              <h5>Oferta</h5>
              <ul>
                {links.map((link: string) => {
                  const slug = slugify(link).toLowerCase();
                  return (
                    <li key={slug}>
                      <Link href={`/oferta/${slug}`}>{link}</Link>
                    </li>
                  );
                })}
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
                <p>{company.companyName}</p>
                <p>{company.firstAddressLine}</p>
                <p>{company.secondAddressLine}</p>
                <p>
                  <a href={`tel:${company.phoneNumber.replaceAll(" ", "")}`}>
                    {company.phoneNumber}
                  </a>
                </p>
                <p>
                  <a href={`mailto:${company.emailAddress}`}>
                    {company.emailAddress}
                  </a>
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
