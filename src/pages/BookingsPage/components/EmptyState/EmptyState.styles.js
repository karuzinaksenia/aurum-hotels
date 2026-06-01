import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { theme } from "../../../../styles/theme";

export const Wrap = styled.div`
  text-align: center;
  padding: 48px 24px;
  background: ${theme.colors.surface};
  border: 1px dashed ${theme.colors.border};
  border-radius: ${theme.radii.lg};
`;

export const Text = styled.p`
  color: ${theme.colors.textMuted};
  margin: 0 0 16px;
`;

export const BrowseLink = styled(Link)`
  display: inline-flex;
  padding: 12px 20px;
  border-radius: ${theme.radii.md};
  background: linear-gradient(
    135deg,
    ${theme.colors.gold},
    ${theme.colors.goldLight}
  );
  color: #1a1208;
  font-weight: 600;
`;
