import styled from "@emotion/styled";
import { theme } from "../../../../styles/theme";

export const Hero = styled.section`
  text-align: center;
  padding: 24px 0 40px;
`;

export const Title = styled.h1`
  font-family: ${theme.fonts.display};
  font-size: clamp(2rem, 5vw, 3rem);
  margin: 0 0 12px;
  background: linear-gradient(
    135deg,
    ${theme.colors.goldLight},
    ${theme.colors.gold}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const Subtitle = styled.p`
  margin: 0 auto;
  max-width: 520px;
  color: ${theme.colors.textMuted};
  font-size: 1.1rem;
`;
