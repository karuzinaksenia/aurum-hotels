import { ru } from "../../../../constants/ru";
import { Hero, Title, Subtitle } from "./HeroSection.styles";

export default function HeroSection() {
  return (
    <Hero aria-labelledby="hotels-hero-title">
      <Title id="hotels-hero-title">{ru.hotels.title}</Title>
      <Subtitle>{ru.hotels.subtitle}</Subtitle>
    </Hero>
  );
}
