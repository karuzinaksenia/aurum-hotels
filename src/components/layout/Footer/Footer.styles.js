import styled from "@emotion/styled";
import { theme } from "../../../styles/theme";

export const Foot = styled.footer`
  border-top: 1px solid ${theme.colors.border};
  background: ${theme.colors.bgElevated};
  margin-top: auto;
`;

export const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 24px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 12px;
  color: ${theme.colors.textMuted};
  font-size: 0.875rem;
`;
