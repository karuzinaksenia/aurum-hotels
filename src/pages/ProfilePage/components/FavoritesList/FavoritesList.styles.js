import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { theme } from "../../../../styles/theme";

export const Grid = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
`;

export const Empty = styled.div`
  text-align: center;
  padding: 48px 24px;
  border-radius: ${theme.radii.lg};
  background: ${theme.colors.surface};
  border: 1px dashed ${theme.colors.border};
`;

export const EmptyText = styled.p`
  margin: 0 0 16px;
  color: ${theme.colors.textMuted};
`;

export const BrowseLink = styled(Link)`
  display: inline-flex;
  padding: 10px 20px;
  border-radius: ${theme.radii.md};
  background: linear-gradient(
    135deg,
    ${theme.colors.gold},
    ${theme.colors.goldLight}
  );
  color: #1a1208;
  font-weight: 700;

  &:hover {
    filter: brightness(1.08);
  }
`;

export const ErrorBox = styled.p`
  padding: 12px 16px;
  border-radius: ${theme.radii.md};
  background: rgba(232, 93, 117, 0.12);
  color: #ff8fa3;
  margin-bottom: 16px;
`;
