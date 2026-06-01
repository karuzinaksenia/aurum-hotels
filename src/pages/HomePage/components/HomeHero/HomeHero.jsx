import { ru } from "../../../../constants/ru";
import { Hero, Title, Subtitle, CtaRow, Cta, CtaSecondary } from "./HomeHero.styles";

export default function HomeHero() {
  return (
    <Hero aria-labelledby="home-title">
      <Title id="home-title">{ru.home.title}</Title>
      <Subtitle>{ru.home.subtitle}</Subtitle>
      <CtaRow>
        <Cta to="/hotels">{ru.home.cta}</Cta>
        <CtaSecondary to="/register">{ru.auth.registerBtn}</CtaSecondary>
      </CtaRow>
    </Hero>
  );
}
