import styled from "@emotion/styled";
import { theme } from "../../../../styles/theme";

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  padding: 20px;
  background: ${theme.colors.surface};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.radii.lg};
  box-shadow: ${theme.shadows.card};
  margin-bottom: 28px;

  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: 2fr 1fr auto;
    align-items: end;
  }
`;

export const RecentWrap = styled.div`
  margin-top: -12px;
  margin-bottom: 24px;
`;

export const RecentLabel = styled.span`
  font-size: 0.8rem;
  color: ${theme.colors.textMuted};
  margin-right: 8px;
`;

export const Chip = styled.button`
  display: inline-block;
  margin: 4px 6px 4px 0;
  padding: 4px 12px;
  border-radius: 999px;
  border: 1px solid ${theme.colors.border};
  background: ${theme.colors.bgElevated};
  color: ${theme.colors.textMuted};
  font-size: 0.8rem;
  cursor: pointer;

  &:hover {
    border-color: ${theme.colors.gold};
    color: ${theme.colors.goldLight};
  }
`;
