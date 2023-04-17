import styled from "styled-components";

export const Empty = styled.div`
  justify-content: center;
  align-items: center;
  height: 52px;
  background: ${({ theme }) => theme.white};
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: ${({ theme }) => theme.navy};
`;
