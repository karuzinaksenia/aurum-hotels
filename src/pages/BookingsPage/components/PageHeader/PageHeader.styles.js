import styled from "@emotion/styled";
import { theme } from "../../../../styles/theme";

export const Header = styled.header`
  margin-bottom: 28px;
`;

export const Title = styled.h1`
  font-family: ${theme.fonts.display};
  font-size: 2rem;
  margin: 0 0 8px;
`;

export const Subtitle = styled.p`
  margin: 0;
  color: ${theme.colors.textMuted};
`;
