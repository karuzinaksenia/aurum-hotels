import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { theme } from "../../../../styles/theme";

export const Section = styled.section`
  margin: 56px 0 32px;
  padding: 36px 28px 40px;
  border-radius: ${theme.radii.xl};
  border: 1px solid ${theme.colors.border};
  background: linear-gradient(
    145deg,
    rgba(20, 28, 47, 0.98),
    rgba(15, 22, 40, 0.92)
  );
  box-shadow: ${theme.shadows.card};
`;

export const Eyebrow = styled.p`
  margin: 0 0 8px;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${theme.colors.gold};
`;

export const Headline = styled.h2`
  font-family: ${theme.fonts.display};
  font-size: clamp(1.45rem, 3.5vw, 2.1rem);
  margin: 0 0 24px;
  line-height: 1.25;
  color: ${theme.colors.goldLight};
  max-width: 28ch;
`;

export const Mission = styled.div`
  margin-bottom: 36px;

  p {
    margin: 0;
    max-width: 68ch;
    color: ${theme.colors.textMuted};
    font-size: 1.02rem;
    line-height: 1.75;
  }
`;

export const BlockTitle = styled.h3`
  margin: 0 0 18px;
  font-size: 1.1rem;
  font-weight: 700;
  color: ${theme.colors.text};
`;

export const Benefits = styled.ul`
  list-style: none;
  margin: 0 0 36px;
  padding: 0;
  display: grid;
  gap: 14px;

  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Benefit = styled.li`
  display: flex;
  gap: 14px;
  padding: 16px 18px;
  border-radius: ${theme.radii.lg};
  background: ${theme.colors.bgElevated};
  border: 1px solid ${theme.colors.border};
`;

export const BenefitMark = styled.span`
  flex-shrink: 0;
  width: 8px;
  height: 8px;
  margin-top: 7px;
  border-radius: 50%;
  background: ${theme.colors.gold};
`;

export const BenefitBody = styled.div``;

export const BenefitTitle = styled.p`
  margin: 0 0 4px;
  font-weight: 600;
  color: ${theme.colors.text};
  font-size: 0.95rem;
`;

export const BenefitText = styled.p`
  margin: 0;
  font-size: 0.88rem;
  color: ${theme.colors.textMuted};
  line-height: 1.5;
`;

export const CtaRow = styled.div`
  text-align: center;
  margin-bottom: 32px;
`;

export const Cta = styled(Link)`
  display: inline-flex;
  padding: 14px 28px;
  border-radius: ${theme.radii.md};
  background: linear-gradient(
    135deg,
    ${theme.colors.gold},
    ${theme.colors.goldLight}
  );
  color: #1a1208;
  font-weight: 700;
  font-size: 1.05rem;

  &:hover {
    filter: brightness(1.08);
  }
`;

export const Contacts = styled.div`
  margin-bottom: 24px;
  padding-top: 24px;
  border-top: 1px solid ${theme.colors.border};
`;

export const ContactLine = styled.p`
  margin: 0 0 8px;
  font-size: 1rem;

  strong {
    color: ${theme.colors.text};
    font-weight: 700;
  }

  a {
    color: ${theme.colors.goldLight};
    font-weight: 600;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Closing = styled.blockquote`
  margin: 0;
  padding: 20px 22px;
  border-left: 3px solid ${theme.colors.gold};
  background: ${theme.colors.bgElevated};
  border-radius: 0 ${theme.radii.md} ${theme.radii.md} 0;
  font-size: 1rem;
  line-height: 1.65;
  color: ${theme.colors.text};
  font-style: normal;
`;
