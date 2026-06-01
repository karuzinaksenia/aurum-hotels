import styled from "@emotion/styled";

function scoreColor(score) {
  if (score >= 4.7) return { bg: "rgba(34, 197, 94, 0.2)", text: "#86efac" };
  if (score >= 4.3) return { bg: "rgba(212, 168, 83, 0.25)", text: "#f0d78c" };
  return { bg: "rgba(148, 163, 184, 0.2)", text: "#cbd5e1" };
}

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 10px;
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.85rem;
  background: ${(p) => scoreColor(p.$score).bg};
  color: ${(p) => scoreColor(p.$score).text};
  backdrop-filter: blur(8px);
`;

export const Score = styled.span``;

export const Label = styled.span`
  font-size: 0.75rem;
  opacity: 0.9;
`;
