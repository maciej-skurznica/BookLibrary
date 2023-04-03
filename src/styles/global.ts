import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle<{
  theme: {
    bgGrey: string;
    teal: string;
    white: string;
    navy: string;
    lightNavy: string;
    sidebarButtonGradient: {
      from: string;
      to: string;
    };
  };
}>`
  body {
    margin: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: ${({ theme }) => theme.bgGrey};
  }
`;
