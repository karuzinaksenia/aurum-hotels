import styled from "@emotion/styled";
import { theme } from "../../../../styles/theme";

export const Panel = styled.section`
  padding: 22px;
  margin-bottom: 24px;
  background: linear-gradient(
    145deg,
    rgba(20, 28, 47, 0.95),
    rgba(15, 22, 40, 0.88)
  );
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.radii.xl};
  box-shadow: ${theme.shadows.card};
  backdrop-filter: blur(12px);
`;

export const CountryBadge = styled.p`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 18px;
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(212, 168, 83, 0.12);
  border: 1px solid rgba(212, 168, 83, 0.35);
  color: ${theme.colors.goldLight};
  font-size: 0.9rem;
  font-weight: 600;
`;

export const PanelTitle = styled.h2`
  margin: 0 0 12px;
  font-size: 1rem;
  font-weight: 600;
  color: ${theme.colors.goldLight};
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: "✦";
    opacity: 0.8;
  }
`;

export const Row = styled.div`
  display: grid;
  gap: 14px;
  margin-bottom: 16px;

  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  }
`;

export const FilterGroup = styled.fieldset`
  border: none;
  margin: 0;
  padding: 0;
`;

export const GroupLabel = styled.legend`
  font-size: 0.8rem;
  font-weight: 600;
  color: ${theme.colors.textMuted};
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`;

export const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Chip = styled.button`
  padding: 8px 14px;
  border-radius: 999px;
  border: 1px solid
    ${(p) => (p.$active ? theme.colors.gold : theme.colors.border)};
  background: ${(p) =>
    p.$active
      ? "linear-gradient(135deg, rgba(212,168,83,0.35), rgba(240,215,140,0.15))"
      : theme.colors.bgElevated};
  color: ${(p) => (p.$active ? theme.colors.goldLight : theme.colors.textMuted)};
  font-size: 0.875rem;
  font-weight: ${(p) => (p.$active ? 600 : 400)};
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover {
    border-color: ${theme.colors.gold};
    color: ${theme.colors.text};
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px 12px;
  border-radius: ${theme.radii.md};
  border: 1px solid ${theme.colors.border};
  background: ${theme.colors.bgElevated};
  color: ${theme.colors.text};
  font-size: 0.95rem;
  font-family: inherit;
  cursor: pointer;

  &:focus {
    border-color: ${theme.colors.gold};
    outline: none;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  padding-top: 4px;
`;
