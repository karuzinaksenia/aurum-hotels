import { useEffect, useState } from "react";
import { ru } from "../../../../constants/ru";
import {
  Hero,
  HeroCarousel,
  HeroSlide,
  HeroAccent,
  HeroOverlay,
  HeroContent,
  Title,
  Subtitle,
  CtaRow,
  Cta,
  CtaSecondary,
} from "./HomeHero.styles";

const ROTATE_MS = 4500;

function heroPhoto(id) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&h=400&q=80`;
}

const HERO_BACKGROUNDS = [
  heroPhoto("1512453979798-5ea266f8880c"),
  heroPhoto("1625244724120-1fd1d34d00f6"),
  heroPhoto("1571896349842-33c89424de2d"),
  heroPhoto("1724947053227-2335bf21d0ae"),
  heroPhoto("1561501900-3701fa6a0864"),
  heroPhoto("1571003123894-1f0594d2b5d9"),
];

export default function HomeHero() {
  const [index, setIndex] = useState(0);
  const [motionReduced, setMotionReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setMotionReduced(mq.matches);
    setMotionReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (motionReduced || HERO_BACKGROUNDS.length < 2) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % HERO_BACKGROUNDS.length),
      ROTATE_MS
    );
    return () => window.clearInterval(id);
  }, [motionReduced]);

  return (
    <Hero aria-labelledby="home-title">
      <HeroCarousel aria-hidden="true">
        {HERO_BACKGROUNDS.map((src, i) => (
          <HeroSlide key={src} $src={src} $active={i === index} />
        ))}
      </HeroCarousel>
      <HeroAccent aria-hidden="true" />
      <HeroOverlay aria-hidden="true" />
      <HeroContent>
        <Title id="home-title">{ru.home.title}</Title>
        <Subtitle>{ru.home.subtitle}</Subtitle>
        <CtaRow>
          <Cta to="/hotels">{ru.home.cta}</Cta>
          <CtaSecondary to="/register">{ru.auth.registerBtn}</CtaSecondary>
        </CtaRow>
      </HeroContent>
    </Hero>
  );
}
