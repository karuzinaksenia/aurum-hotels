import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { theme } from "../../../../styles/theme";

export const Section = styled.section`
  padding: 24px;
  background: ${theme.colors.surface};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.radii.lg};
  box-shadow: ${theme.shadows.card};
`;

export const Heading = styled.h2`
  font-family: ${theme.fonts.display};
  margin: 0 0 8px;
`;

export const Hint = styled.p`
  margin: 0 0 20px;
  color: ${theme.colors.textMuted};
  font-size: 0.9rem;
`;

export const Form = styled.form`
  display: grid;
  gap: 14px;
  max-width: 420px;
`;

export const Success = styled.p`
  margin-top: 16px;
  padding: 12px;
  border-radius: ${theme.radii.md};
  background: rgba(34, 197, 94, 0.15);
  color: #86efac;
`;

export const Error = styled.p`
  margin-top: 16px;
  padding: 12px;
  border-radius: ${theme.radii.md};
  background: rgba(239, 68, 68, 0.15);
  color: #fca5a5;
`;

export const AuthPrompt = styled.div`
  padding: 24px;
  border-radius: ${theme.radii.md};
  background: ${theme.colors.bgElevated};
  border: 1px dashed ${theme.colors.border};
  text-align: center;

  p {
    margin: 0 0 16px;
    color: ${theme.colors.textMuted};
  }

  div {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
  }
`;

export const AuthLink = styled(Link)`
  display: inline-flex;
  padding: 12px 20px;
  border-radius: ${theme.radii.md};
  font-weight: 600;
  background: ${(p) =>
    p.$ghost
      ? "transparent"
      : `linear-gradient(135deg, ${theme.colors.gold}, ${theme.colors.goldLight})`};
  color: ${(p) => (p.$ghost ? theme.colors.textMuted : "#1a1208")};
  border: ${(p) => (p.$ghost ? `1px solid ${theme.colors.border}` : "none")};
`;
