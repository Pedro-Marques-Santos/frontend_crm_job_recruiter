"use client";

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  background: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: center;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 5px;
  padding: 30px;

  h1 {
    font-size: 25px;
    font-weight: 400;
    color: var(--black-300);
    margin-bottom: 4px;
    @media (max-width: 900px) {
      font-size: 25px;
    }
  }

  h2 {
    font-size: 31px;
    font-weight: 800;
    color: var(--purple-500);
    margin-bottom: 15px;
    @media (max-width: 900px) {
      font-size: 32px;
    }
  }

  h5 {
    font-size: 15px;
    font-weight: 400;
    @media (max-width: 900px) {
      font-size: 18px;
    }
  }

  @media (max-width: 900px) {
    min-height: 430px;
  }
`;
export const Button = styled.button`
  height: 60px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--black-300);
  margin-top: 20px;
  background: var(--white-500);
  border-radius: 5px;

  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  transition: box-shadow 0.3s ease; /* Adiciona uma transição suave para a mudança do box-shadow */

  &:hover {
    box-shadow: rgba(99, 99, 99, 0.5) 0px 2px 8px 0px;
  }
`;

export const Icon = styled.div`
  margin-right: 10px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SelectLanguageWidth = styled.div`
  max-width: 150px;
`;
