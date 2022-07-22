import type { NextPage } from "next";
import Hero from "components/Hero";
import HeroImg from "assets/img/hero_stock.png";

const Home: NextPage = () => {
  return (
    <Hero
      img={HeroImg}
      title={"It’s high time you told your story"}
      subtitle={
        "Storytelling in business has become a field in its own right as industries have grown"
      }
    />
  );
};

export default Home;
