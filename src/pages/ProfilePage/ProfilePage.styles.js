import styled from "@emotion/styled";
import { theme } from "../../styles/theme";

export const Header = styled.header`
  margin-bottom: 28px;
`;

export const Title = styled.h1`
  font-family: ${theme.fonts.display};
  font-size: clamp(1.75rem, 4vw, 2.25rem);
  margin: 0 0 8px;
`;

export const Subtitle = styled.p`
  margin: 0 0 20px;
  color: ${theme.colors.textMuted};
  max-width: 52ch;
`;

export const UserCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px 24px;
  padding: 18px 22px;
  border-radius: ${theme.radii.lg};
  background: ${theme.colors.surface};
  border: 1px solid ${theme.colors.border};
`;

export const Avatar = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${theme.fonts.display};
  font-size: 1.35rem;
  font-weight: 700;
  color: #1a1208;
  background: linear-gradient(
    135deg,
    ${theme.colors.gold},
    ${theme.colors.goldLight}
  );
`;

export const UserInfo = styled.div`
  flex: 1;
  min-width: 160px;
`;

export const UserName = styled.p`
  margin: 0;
  font-weight: 700;
  font-size: 1.1rem;
`;

export const UserEmail = styled.p`
  margin: 4px 0 0;
  color: ${theme.colors.textMuted};
  font-size: 0.9rem;
`;

export const Stats = styled.div`
  display: flex;
  gap: 20px;
`;

export const Stat = styled.div`
  text-align: center;

  strong {
    display: block;
    font-size: 1.35rem;
    color: ${theme.colors.goldLight};
  }

  span {
    font-size: 0.8rem;
    color: ${theme.colors.textMuted};
  }
`;

export const Tabs = styled.div`
  display: flex;
  gap: 8px;
  margin: 28px 0 24px;
  border-bottom: 1px solid ${theme.colors.border};
  padding-bottom: 0;
`;

export const Tab = styled.button`
  padding: 12px 20px;
  margin-bottom: -1px;
  border: none;
  border-bottom: 2px solid
    ${(p) => (p.$active ? theme.colors.gold : "transparent")};
  background: transparent;
  color: ${(p) => (p.$active ? theme.colors.goldLight : theme.colors.textMuted)};
  font-weight: ${(p) => (p.$active ? 700 : 500)};
  font-size: 0.95rem;
  cursor: pointer;
  transition: color 0.15s ease;

  &:hover {
    color: ${theme.colors.text};
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.gold};
    outline-offset: 2px;
  }
`;

export const Panel = styled.section``;
