import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { theme } from "../../../../styles/theme";

export const Back = styled(Link)`
  display: inline-block;
  margin-bottom: 16px;
  color: ${theme.colors.textMuted};
  font-size: 0.9rem;

  &:hover {
    color: ${theme.colors.goldLight};
  }
`;
