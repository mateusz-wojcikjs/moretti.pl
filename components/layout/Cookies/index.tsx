import React, { MouseEventHandler, useEffect, useState } from "react";
import Heading from "components/common/Heading";
import Cookies from "js-cookie";

import { StyledCookies } from "./Cookies.styled";
import Button from "../../common/Button";

const USER_CONSENT_COOKIE_KEY = "cookie_consent_is_true";
const USER_CONSENT_COOKIE_EXPIRE_DATE = 365;

const CookieConsent = () => {
  const [cookieConsentIsTrue, setCookieConsentIsTrue] = useState(true);

  useEffect(() => {
    const consentIsTrue = Cookies.get(USER_CONSENT_COOKIE_KEY) === "true";
    setCookieConsentIsTrue(consentIsTrue);
  }, []);

  const onAcceptCookies: MouseEventHandler<HTMLDivElement> = () => {
    if (!cookieConsentIsTrue) {
      Cookies.set(USER_CONSENT_COOKIE_KEY, "true", {
        expires: USER_CONSENT_COOKIE_EXPIRE_DATE,
      });
      setCookieConsentIsTrue(true);
    }
  };
  return (
    <StyledCookies className={cookieConsentIsTrue ? "vanish" : ""}>
      <Heading headingLevel="h4">Ta strona używa plików cookies</Heading>
      <p>
        Używamy plików cookies, w celu ułatwienia nawigacji oraz dostosowania
        serwisu do preferencji użytkownika. Jeśli nie chcesz, aby pliki cookies
        były zapisywane na Twoim dysku zmień ustawienia swojej przeglądarki.
        Niedokonanie zmian ustawień przeglądarki internetowej na ustawienia
        blokujące zapisywanie plików cookies jest jednoznaczne z wyrażeniem
        zgody na ich zapisywanie.
      </p>
      <Button
        onClick={onAcceptCookies}
        htmlType="button"
        size="l"
        type="primary"
      >
        Akceptuję
      </Button>
    </StyledCookies>
  );
};

export default CookieConsent;
