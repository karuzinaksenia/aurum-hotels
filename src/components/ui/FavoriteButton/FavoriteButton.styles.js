import styled from "@emotion/styled";
import { theme } from "../../../styles/theme";

export const Btn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${(p) => (p.$large ? "44px" : "36px")};
  height: ${(p) => (p.$large ? "44px" : "36px")};
  border-radius: 50%;
  border: 1px solid
    ${(p) =>
      p.$active
        ? "rgba(232, 93, 117, 0.6)"
        : "rgba(255, 255, 255, 0.25)"};
  background: ${(p) =>
    p.$active ? "rgba(232, 93, 117, 0.25)" : "rgba(7, 11, 20, 0.72)"};
  backdrop-filter: blur(8px);
  color: ${(p) => (p.$active ? "#ff8fa3" : theme.colors.text)};
  font-size: ${(p) => (p.$large ? "1.25rem" : "1rem")};
  cursor: pointer;
  transition:
    transform 0.15s ease,
    background 0.15s ease,
    border-color 0.15s ease;
  z-index: 2;

  &:hover {
    transform: scale(1.08);
    border-color: rgba(232, 93, 117, 0.55);
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.gold};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.6;
    cursor: wait;
  }
`;
