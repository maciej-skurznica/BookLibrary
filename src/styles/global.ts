import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle<{
  theme: {
    bgGrey: string;
    teal: string;
    white: string;
    navy: string;
    lightNavy: string;
  };
}>`
  body {
    margin: 0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    background-color: ${({ theme }) => theme.bgGrey};
    font-family: "Lato", sans-serif;
  }

  div {
    display: flex;
    box-sizing: border-box;
  }
`;
