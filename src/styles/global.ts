"use client";

import { fontroboto } from "@/fonts";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --black-300: #2F2F2F;
    --gray-100: #F4F4F4;
    --gray-300: #ccc;
    --green-500: #3AFF71;
    --gray-700: #939393;
    --purple-100: #6F6C90;
    --purple-500: #6358DC;
    --purple-800: #170F49;
    --purple-600: #4b3ebb;
    --white-500: #ffffff;
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
    font-family: ${fontroboto.style.fontFamily};
  }
`;
