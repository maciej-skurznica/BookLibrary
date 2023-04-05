import styled from "styled-components";

export const Container = styled.div`
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin-right: 10%;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 22px;
  line-height: 20px;
  color: ${({ theme }) => theme.navy};
  margin-bottom: 50px;
`;

export const List = styled.div`
  flex-direction: column;
  margin: 37px 11.55% 12px 0;
  gap: 17px;
`;
