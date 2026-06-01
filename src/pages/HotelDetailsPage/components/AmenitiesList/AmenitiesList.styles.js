import styled from "@emotion/styled";
import { theme } from "../../../../styles/theme";

export const Section = styled.section`
  margin-bottom: 32px;
`;

export const Heading = styled.h2`
  font-size: 1.1rem;
  margin: 0 0 12px;
  color: ${theme.colors.goldLight};
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  padding: 8px 14px;
  border-radius: 999px;
  background: ${theme.colors.surface};
  border: 1px solid ${theme.colors.border};
  font-size: 0.9rem;
`;
