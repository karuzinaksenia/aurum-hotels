import styled from "@emotion/styled";
import { theme } from "../../../../styles/theme";

export const Form = styled.form`
  padding: 20px;
  background: ${theme.colors.surface};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.radii.lg};
  box-shadow: ${theme.shadows.card};
  margin-bottom: 28px;
`;

export const SearchRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: flex-end;
`;

export const Combobox = styled.div`
  position: relative;
  flex: 1;
  min-width: min(100%, 220px);
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${theme.colors.text};
`;

export const TextInput = styled.input`
  width: 100%;
  padding: 12px 14px;
  border-radius: ${theme.radii.md};
  border: 1px solid ${theme.colors.border};
  background: ${theme.colors.bgElevated};
  color: ${theme.colors.text};
  font-size: 0.95rem;
  font-family: inherit;

  &::placeholder {
    color: ${theme.colors.textMuted};
  }

  &:focus {
    border-color: ${theme.colors.gold};
    outline: none;
  }
`;

export const Suggestions = styled.div`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  z-index: 20;
  max-height: 280px;
  overflow-y: auto;
  padding: 8px 0;
  background: ${theme.colors.bgElevated};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.radii.md};
  box-shadow: ${theme.shadows.card};
`;

export const Group = styled.div`
  &:not(:last-child) {
    margin-bottom: 4px;
    padding-bottom: 4px;
    border-bottom: 1px solid ${theme.colors.border};
  }
`;

export const GroupTitle = styled.div`
  padding: 6px 14px 4px;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: ${theme.colors.textMuted};
`;

export const SuggestionButton = styled.button`
  display: block;
  width: 100%;
  padding: 10px 14px;
  border: none;
  background: transparent;
  color: ${theme.colors.text};
  font-size: 0.9rem;
  font-family: inherit;
  text-align: left;
  cursor: pointer;

  &:hover,
  &:focus-visible {
    background: rgba(212, 168, 83, 0.12);
    color: ${theme.colors.goldLight};
    outline: none;
  }
`;

export const RecentBlock = styled.div`
  margin-top: 14px;
`;

export const RecentLabel = styled.span`
  display: block;
  margin-bottom: 8px;
  font-size: 0.8rem;
  color: ${theme.colors.textMuted};
`;

export const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Chip = styled.button`
  padding: 6px 12px;
  border-radius: 999px;
  border: 1px solid ${theme.colors.border};
  background: ${theme.colors.bgElevated};
  color: ${theme.colors.textMuted};
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover {
    border-color: ${theme.colors.gold};
    color: ${theme.colors.text};
  }
`;
