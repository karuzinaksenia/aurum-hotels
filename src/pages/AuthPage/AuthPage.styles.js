import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { theme } from "../../styles/theme";

export const Page = styled.div`
  min-height: calc(100vh - 140px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 16px;
`;

export const Card = styled.div`
  width: 100%;
  max-width: 440px;
  padding: 36px 32px;
  border-radius: ${theme.radii.xl};
  background: linear-gradient(
    160deg,
    rgba(20, 28, 47, 0.98),
    rgba(15, 22, 40, 0.95)
  );
  border: 1px solid ${theme.colors.border};
  box-shadow: ${theme.shadows.glow};
`;

export const Title = styled.h1`
  font-family: ${theme.fonts.display};
  margin: 0 0 8px;
  font-size: 1.75rem;
  color: ${theme.colors.goldLight};
`;

export const Subtitle = styled.p`
  margin: 0 0 28px;
  color: ${theme.colors.textMuted};
  font-size: 0.95rem;
`;

export const Form = styled.form`
  display: grid;
  gap: 16px;
`;

export const Error = styled.p`
  margin: 0;
  padding: 12px;
  border-radius: ${theme.radii.md};
  background: rgba(239, 68, 68, 0.15);
  color: #fca5a5;
  font-size: 0.9rem;
`;

export const Footer = styled.p`
  margin: 24px 0 0;
  text-align: center;
  color: ${theme.colors.textMuted};
  font-size: 0.9rem;
`;

export const FooterLink = styled(Link)`
  color: ${theme.colors.goldLight};
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`;
