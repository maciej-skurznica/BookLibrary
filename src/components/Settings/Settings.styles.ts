import styled from "styled-components";

export const ThemeButton = styled.button`
  width: 20%;
  height: 52px;
  background: linear-gradient(180deg, #679cf6 0%, #4072ee 100%);
  border-radius: 41px;
  border: none;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: ${({ theme }) => theme.white};
  cursor: pointer;

  :hover {
    box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.24);
  }

  :active {
    box-shadow: 0 8px 15px 0 rgba(0, 0, 0, 0.24);
  }
`;
