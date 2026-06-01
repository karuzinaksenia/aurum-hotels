import styled from "@emotion/styled";
import { theme } from "../../../styles/theme";

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${theme.colors.textMuted};
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 12px 14px;
  border-radius: ${theme.radii.md};
  border: 1px solid ${theme.colors.border};
  background: ${theme.colors.bgElevated};
  color: ${theme.colors.text};
  font-size: 1rem;
  font-family: inherit;

  &::placeholder {
    color: ${theme.colors.textMuted};
  }

  &:focus {
    border-color: ${theme.colors.gold};
    outline: none;
  }
`;

export const ErrorText = styled.span`
  font-size: 0.8rem;
  color: ${theme.colors.danger};
`;
