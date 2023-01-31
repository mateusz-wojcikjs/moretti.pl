import React from "react";
import { Container } from "components/layout/Layout.styled";

import Heading from "../components/common/Heading";
import ButtonLink from "../components/common/ButtonLink";
import PageNotFoundWrapper from "../components/layout/PageNotFoundWrapper";

const Custom404 = () => {
  return (
    <Container as="section">
      <PageNotFoundWrapper>
        <Heading headingLevel="h1">Nie znaleziono strony.</Heading>
        <Heading headingLevel="h4">
          Niestety strona, na którą próbowałeś wejść nie istnieje. Prosimy o
          powrót na stronę główną
        </Heading>
        <ButtonLink href="/" size="l" type="primary">
          Przejdź na stronę główną
        </ButtonLink>
      </PageNotFoundWrapper>
    </Container>
  );
};

export default Custom404;
