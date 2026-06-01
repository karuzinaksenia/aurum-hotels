import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { theme } from "../../../../styles/theme";

export const Card = styled.article`
  position: relative;
  background: ${theme.colors.surface};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.radii.lg};
  overflow: hidden;
  box-shadow: ${theme.shadows.card};
  transition:
    transform 0.25s cubic-bezier(0.34, 1.4, 0.64, 1),
    box-shadow 0.25s ease,
    border-color 0.25s ease;

  &:hover {
    transform: translateY(-6px) scale(1.01);
    box-shadow: ${theme.shadows.glow};
    border-color: rgba(212, 168, 83, 0.45);
  }

  &:hover img {
    transform: scale(1.06);
  }
`;

export const ImageWrap = styled.div`
  position: relative;
  height: 200px;
  overflow: hidden;
`;

export const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(7, 11, 20, 0.92) 0%,
    rgba(7, 11, 20, 0.2) 50%,
    transparent 100%
  );
  pointer-events: none;
`;

export const FavoriteWrap = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 2;
`;

export const Badges = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  right: 52px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 8px;
  z-index: 1;
`;

export const StarsBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  border-radius: ${theme.radii.md};
  background: rgba(7, 11, 20, 0.75);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(212, 168, 83, 0.3);
`;

export const Body = styled.div`
  padding: 16px 18px 20px;
`;

export const Name = styled.h2`
  font-family: ${theme.fonts.display};
  font-size: 1.2rem;
  margin: 0 0 4px;
`;

export const Meta = styled.p`
  margin: 0 0 8px;
  color: ${theme.colors.textMuted};
  font-size: 0.9rem;
`;

export const Desc = styled.p`
  margin: 0 0 14px;
  font-size: 0.88rem;
  color: ${theme.colors.textMuted};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.5;
`;

export const AmenityTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 14px;
`;

export const Amenity = styled.span`
  font-size: 0.7rem;
  padding: 3px 8px;
  border-radius: 4px;
  background: ${theme.colors.bgElevated};
  color: ${theme.colors.textMuted};
  border: 1px solid ${theme.colors.border};
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

export const PriceBlock = styled.div``;

export const Price = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${theme.colors.goldLight};
`;

export const PerNight = styled.span`
  font-size: 0.8rem;
  color: ${theme.colors.textMuted};
`;

export const ViewLink = styled(Link)`
  display: inline-flex;
  padding: 10px 18px;
  border-radius: ${theme.radii.md};
  background: linear-gradient(
    135deg,
    ${theme.colors.gold},
    ${theme.colors.goldLight}
  );
  color: #1a1208;
  font-weight: 700;
  font-size: 0.875rem;
  white-space: nowrap;
  transition: filter 0.15s ease;

  &:hover {
    filter: brightness(1.08);
  }
`;
