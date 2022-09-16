import React from "react";
import { NextPage } from "next";
import Breadcrumbs from "../../components/common/Breadcrumbs";
import Hero from "../../components/Hero";
import HeroImg from "../../assets/img/about.jpeg";
import Heading from "../../components/common/Heading";
import {
  Container,
  FullSectionGray,
} from "../../components/layout/Layout.styled";
import Cta from "../../components/common/Cta";
import Testimonials from "../../components/Testimonials";
import Partners from "../../components/layout/Partners";
import Slider from "../../components/Slider";
import GridGallery from "../../components/common/GridGallery";
import TextBox from "../../components/common/TextBox";

const OfferPage: NextPage = () => {
  return (
    <>
      <Hero img={HeroImg} secondary textCenter>
        <Heading headingLevel="h1" isCenter>
          Produkt 1
        </Heading>
        <Breadcrumbs />
      </Hero>
      <Container>
        <GridGallery />
      </Container>

      <Container>
        <Heading headingLevel="h2" isDecorated>
          Zobacz zdjęcia
        </Heading>

        <TextBox>
          <Heading headingLevel="h2" isDecorated>
            Silosy stalowe do zboża
          </Heading>
          <p>
            Dostępne w asortymencie firmy Moretti Macchine silosy stalowe do
            zboża to jeden z najczęściej wybieranych przez naszych klientów
            systemów przechowywania. Ich głównym przeznaczeniem jest
            magazynowanie nie tylko zboża, ale także innych produktów sypkich i
            granulowanych, np. ziaren, nasion, paszy, śrutu czy też pelletu.
            Dzięki wykonaniu z wytrzymałego oraz odpornego na warunki
            atmosferyczne materiału, tego typu rozwiązania mogą być z
            powodzeniem stosowane na zewnątrz budynku, bez obaw o zniszczenie
            przechowywanych w nich produktów.
          </p>
          <p>
            Proponowane przez nas silosy stalowe do zboża stanowią doskonałą
            alternatywę dla silosów żelbetowych. Wykorzystanie stali pozwala
            przede wszystkim na znaczne skrócenie czasu budowy oraz umożliwia
            zmniejszenie obciążenia fundamentów. Wszystkie dostępne w ofercie
            naszej firmy systemy przechowywania są zgodne z wymogami
            bezpieczeństwa i ochrony zdrowia, w tym między innymi z normą (PN-EN
            1993-4-1, 2009). Bezpieczeństwo Twoje oraz Twoich klientów jest
            naszym priorytetem, dlatego też dokładamy wszelkich starań, aby
            dostarczane rozwiązania spełniały wszelkie standardy i pochodziły od
            zaufanych producentów.
          </p>
        </TextBox>

        <Slider />
      </Container>

      <FullSectionGray>
        <Cta />
      </FullSectionGray>

      <Container>
        <Testimonials />
      </Container>
      <Partners />
    </>
  );
};

export default OfferPage;
