import styled from "@emotion/styled";
import { theme } from "../../../../styles/theme";

export const Header = styled.header`
  text-align: center;
  padding: 32px 24px 8px;
  margin-bottom: 28px;
`;

export const Title = styled.h1`
  font-family: ${theme.fonts.display};
  font-size: clamp(2rem, 5vw, 3.2rem);
  margin: 0;
  background: linear-gradient(
    135deg,
    ${theme.colors.goldLight},
    ${theme.colors.gold}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;
