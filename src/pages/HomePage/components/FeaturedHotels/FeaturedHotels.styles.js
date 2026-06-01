import styled from "@emotion/styled";
import { theme } from "../../../../styles/theme";

export const Section = styled.section`
  margin-top: 48px;
`;

export const Title = styled.h2`
  font-family: ${theme.fonts.display};
  margin: 0 0 20px;
`;

export const Grid = styled.div`
  display: grid;
  gap: 16px;

  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
