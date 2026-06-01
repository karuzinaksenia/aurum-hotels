import styled from "@emotion/styled";
import { NavLink as RouterNavLink } from "react-router-dom";
import { theme } from "../../../styles/theme";

export const Bar = styled.header`
  background: rgba(15, 22, 40, 0.92);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid ${theme.colors.border};
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const Inner = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 14px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
`;

export const Brand = styled(RouterNavLink)`
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-family: ${theme.fonts.display};
  font-size: 1.3rem;
  font-weight: 700;
  color: ${theme.colors.goldLight};
  letter-spacing: 0.02em;

  span {
    font-family: ${theme.fonts.body};
    font-size: 0.7rem;
    font-weight: 500;
    color: ${theme.colors.textMuted};
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 6px;
  flex: 1;
  justify-content: center;
`;

export const NavLink = styled(RouterNavLink)`
  padding: 8px 14px;
  border-radius: ${theme.radii.md};
  font-weight: 500;
  font-size: 0.95rem;
  color: ${theme.colors.textMuted};
  transition:
    background 0.15s,
    color 0.15s;

  &.active,
  &[aria-current="page"] {
    background: ${theme.colors.surface};
    color: ${theme.colors.goldLight};
  }

  &:hover {
    color: ${theme.colors.text};
  }
`;

export const UserBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const UserName = styled.span`
  font-size: 0.9rem;
  color: ${theme.colors.textMuted};
  max-width: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: ${theme.breakpoints.md}) {
    display: none;
  }
`;
