import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { theme } from "../../../../styles/theme";

export const Hero = styled.section`
  position: relative;
  text-align: center;
  padding: 56px 24px 48px;
  margin-bottom: 16px;
  border-radius: ${theme.radii.xl};
  overflow: hidden;
  border: 1px solid ${theme.colors.border};
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;
`;

export const HeroCarousel = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
`;

export const HeroSlide = styled.div`
  position: absolute;
  inset: 0;
  background-image: url(${({ $src }) => $src});
  background-position: center;
  background-size: cover;
  opacity: ${({ $active }) => ($active ? 0.35 : 0)};
  transition: opacity 1.2s ease-in-out;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const HeroAccent = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background:
    linear-gradient(135deg, rgba(99, 102, 241, 0.2), transparent 50%),
    linear-gradient(225deg, rgba(212, 168, 83, 0.15), transparent 55%);
`;

export const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background: linear-gradient(
    to bottom,
    rgba(7, 11, 20, 0.5),
    rgba(7, 11, 20, 0.92)
  );
`;

export const Title = styled.h1`
  font-family: ${theme.fonts.display};
  font-size: clamp(2rem, 5vw, 3.2rem);
  margin: 0 0 16px;
  background: linear-gradient(
    135deg,
    ${theme.colors.goldLight},
    ${theme.colors.gold}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const Subtitle = styled.p`
  margin: 0 auto 28px;
  max-width: 560px;
  color: ${theme.colors.textMuted};
  font-size: 1.1rem;
  line-height: 1.65;
`;

export const CtaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
`;

export const Cta = styled(Link)`
  display: inline-flex;
  padding: 14px 28px;
  border-radius: ${theme.radii.md};
  background: linear-gradient(
    135deg,
    ${theme.colors.gold},
    ${theme.colors.goldLight}
  );
  color: #1a1208;
  font-weight: 700;
  font-size: 1rem;
`;

export const CtaSecondary = styled(Link)`
  display: inline-flex;
  padding: 14px 24px;
  border-radius: ${theme.radii.md};
  border: 1px solid ${theme.colors.border};
  color: ${theme.colors.text};
  font-weight: 600;
`;
