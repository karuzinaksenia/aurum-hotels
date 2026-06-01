import styled from "@emotion/styled";

export const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 22px;

  & > article {
    animation: fadeInUp 0.45s ease backwards;
  }

  & > article:nth-of-type(1) {
    animation-delay: 0.03s;
  }
  & > article:nth-of-type(2) {
    animation-delay: 0.06s;
  }
  & > article:nth-of-type(3) {
    animation-delay: 0.09s;
  }
  & > article:nth-of-type(4) {
    animation-delay: 0.12s;
  }
  & > article:nth-of-type(5) {
    animation-delay: 0.15s;
  }
  & > article:nth-of-type(6) {
    animation-delay: 0.18s;
  }
`;

export const Message = styled.p`
  text-align: center;
  color: #94a3b8;
  padding: 48px 24px;
  font-size: 1.05rem;
`;

export const ErrorBox = styled.div`
  padding: 16px;
  border-radius: 12px;
  background: rgba(239, 68, 68, 0.15);
  color: #fca5a5;
  margin-bottom: 20px;
`;
