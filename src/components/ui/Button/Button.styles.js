import styled from "@emotion/styled";
import { theme } from "../../../styles/theme";

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: ${(p) => (p.$size === "sm" ? "8px 14px" : "12px 20px")};
  border-radius: ${theme.radii.md};
  border: none;
  font-weight: 600;
  font-size: ${(p) => (p.$size === "sm" ? "0.875rem" : "1rem")};
  cursor: pointer;
  transition:
    transform 0.15s ease,
    box-shadow 0.15s ease,
    opacity 0.15s ease;

  background: ${(p) =>
    p.$variant === "ghost"
      ? "transparent"
      : p.$variant === "danger"
        ? theme.colors.danger
        : p.$variant === "secondary"
          ? theme.colors.surface
          : `linear-gradient(135deg, ${theme.colors.gold}, ${theme.colors.goldLight})`};
  color: ${(p) =>
    p.$variant === "ghost" || p.$variant === "secondary"
      ? theme.colors.text
      : "#1a1208"};
  border: ${(p) =>
    p.$variant === "ghost" || p.$variant === "secondary"
      ? `1px solid ${theme.colors.border}`
      : "none"};
  box-shadow: ${(p) =>
    p.$variant === "primary" ? theme.shadows.glow : "none"};

  &:hover:not(:disabled) {
    transform: translateY(-1px);
    opacity: 0.95;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
