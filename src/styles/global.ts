"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --black-800: #202024;
  } 
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  button {
    cursor: pointer;
    outline: none;
    border: none;
  }
  input {
    outline: none;
    border: none;
  }
  body {
  }
`;
