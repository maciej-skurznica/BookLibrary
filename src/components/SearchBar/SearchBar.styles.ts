import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  padding-right: 11.55%;
`;

export const Form = styled.form`
  display: flex;
  flex-grow: 1;
`;

export const IconDiv = styled.div`
  background: #ffffff;
  border-radius: 41px 0 0 41px;
  font-size: 16px;
  line-height: 20px;
  padding: 16px 12px 16px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input<{ valid: boolean }>`
  width: 100%;
  font-size: 16px;
  line-height: 20px;
  padding: 16px 0;
  border: none;
  color: #5b5b5b;
  background: #ffffff;

  ::placeholder {
    color: #5b5b5b;
  }

  :focus {
    outline: none;
  }

  ${({ valid }) =>
    !valid &&
    `
    ::placeholder {
      color: #8B201D;
    }
  `}
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.teal};
  border: none;
  border-radius: 0 41px 41px 0;
  color: #ffffff;
  font-size: 16px;
  line-height: 20px;
  width: 58.63px;
  padding-right: 7px;
`;
