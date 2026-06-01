import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { theme } from "../../../styles/theme";

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

export const SpinnerWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px;
  gap: 12px;
  color: ${theme.colors.textMuted};
`;

export const Ring = styled.div`
  width: 36px;
  height: 36px;
  border: 3px solid ${theme.colors.border};
  border-top-color: ${theme.colors.gold};
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;
