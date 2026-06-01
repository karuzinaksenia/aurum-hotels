import styled from "@emotion/styled";
import { theme } from "../../../../styles/theme";

export const Hero = styled.section`
  display: grid;
  gap: 24px;
  margin-bottom: 32px;

  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1.15fr 1fr;
    align-items: start;
  }
`;

export const ImageWrap = styled.div`
  position: relative;
  height: 320px;
  border-radius: ${theme.radii.xl};
  overflow: hidden;
  box-shadow: ${theme.shadows.card};
`;

export const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(7, 11, 20, 0.3),
    rgba(7, 11, 20, 0.75)
  );
`;

export const FavoriteWrap = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 2;
`;

export const Badges = styled.div`
  position: absolute;
  bottom: 16px;
  left: 16px;
  right: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
`;

export const Info = styled.div`
  padding: 8px 0;
`;

export const Title = styled.h1`
  font-family: ${theme.fonts.display};
  font-size: clamp(1.6rem, 4vw, 2.2rem);
  margin: 0 0 8px;
`;

export const Location = styled.p`
  color: ${theme.colors.textMuted};
  margin: 0 0 8px;
  font-size: 1.05rem;
`;

export const Stats = styled.p`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0 0 16px;
  color: ${theme.colors.goldLight};
  font-weight: 600;
  font-size: 0.95rem;
`;

export const Price = styled.p`
  font-size: 1.6rem;
  font-weight: 700;
  color: ${theme.colors.goldLight};
  margin: 0 0 16px;
`;

export const Description = styled.p`
  line-height: 1.75;
  color: ${theme.colors.textMuted};
  font-size: 1.02rem;
`;
