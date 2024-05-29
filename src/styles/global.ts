"use client";

import { fontroboto } from "@/fonts";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --black-300: #2F2F2F;
    --gray-100: #F4F4F4;
    --gray-020: #F4F6F9;
    --gray-080: #F0F3F6;
    --gray-088: #ebeef2;
    --gray-400: #cecece;
    --gray-050: #F7F8FD;
    --gray-300: #ccc;
    --green-500: #3AFF71;
    --gray-700: #939393;
    --gray-800: #545d69;
    --red-400: #d34343;
    --gray-600: #6d7580;
    --purple-100: #6F6C90;
    --purple-500: #6358DC;
    --purple-800: #170F49;
    --purple-650: #4623e9;
    --purple-700: #4925e9;
    --purple-600: #4b3ebb;
    --white-500: #ffffff;
    --blue-500: #0064E1;
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
