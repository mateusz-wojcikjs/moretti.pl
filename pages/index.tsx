import type { NextPage } from "next";
import Hero, { TitleType } from "components/Hero";
import HeroImg from "assets/img/hero_stock.png";

const Home: NextPage = () => {
  const title: TitleType = {
    textTop: "It’s high time you told",
    textBottom: "your story",
  };

  return (
    <Hero
      img={HeroImg}
      title={title}
      subtitle={
        "Storytelling in business has become a field in its own right as industries have grown"
      }
    />
  );
};

export default Home;
