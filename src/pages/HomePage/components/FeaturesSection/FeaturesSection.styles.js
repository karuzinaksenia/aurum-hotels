import styled from "@emotion/styled";
import { theme } from "../../../../styles/theme";

export const Section = styled.section`
  margin: 40px 0;
`;

export const Title = styled.h2`
  font-family: ${theme.fonts.display};
  text-align: center;
  margin: 0 0 24px;
  color: ${theme.colors.goldLight};
`;

export const Grid = styled.div`
  display: grid;
  gap: 16px;

  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Card = styled.article`
  padding: 20px;
  background: ${theme.colors.surface};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.radii.lg};
`;

export const CardTitle = styled.h3`
  margin: 0 0 8px;
  font-size: 1.05rem;
`;

export const CardText = styled.p`
  margin: 0;
  color: ${theme.colors.textMuted};
  font-size: 0.9rem;
  line-height: 1.5;
`;
