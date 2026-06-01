import styled from "@emotion/styled";
import { theme } from "../../../styles/theme";

export const Wrap = styled.span`
  display: inline-flex;
  gap: 2px;
  line-height: 1;
`;

export const Star = styled.span`
  font-size: 0.95rem;
  color: ${(p) => (p.$active ? theme.colors.goldLight : theme.colors.border)};
  text-shadow: ${(p) =>
    p.$active ? `0 0 8px ${theme.colors.gold}88` : "none"};
  transition: color 0.15s ease;
`;
