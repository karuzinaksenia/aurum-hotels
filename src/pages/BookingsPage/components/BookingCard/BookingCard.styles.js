import styled from "@emotion/styled";
import { theme } from "../../../../styles/theme";

export const Card = styled.article`
  padding: 20px;
  background: ${theme.colors.surface};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.radii.lg};
  display: grid;
  gap: 8px;
`;

export const HotelName = styled.h2`
  font-family: ${theme.fonts.display};
  font-size: 1.15rem;
  margin: 0;
`;

export const Row = styled.p`
  margin: 0;
  color: ${theme.colors.textMuted};
  font-size: 0.9rem;
`;

export const Total = styled.p`
  margin: 8px 0 0;
  font-weight: 700;
  color: ${theme.colors.goldLight};
`;

export const Actions = styled.div`
  margin-top: 8px;
`;
