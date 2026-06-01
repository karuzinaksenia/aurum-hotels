import styled from "@emotion/styled";
import { theme } from "../../../../styles/theme";

export const Bar = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 20px;
  padding: 12px 16px;
  border-radius: ${theme.radii.md};
  background: rgba(212, 168, 83, 0.08);
  border: 1px solid rgba(212, 168, 83, 0.2);
`;

export const Count = styled.p`
  margin: 0;
  font-weight: 600;
  color: ${theme.colors.goldLight};
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

export const Tag = styled.span`
  font-size: 0.75rem;
  padding: 4px 10px;
  border-radius: 999px;
  background: ${theme.colors.surface};
  color: ${theme.colors.textMuted};
  border: 1px solid ${theme.colors.border};
`;
