"use client";

import styled from "styled-components";

export const Contianer = styled.div`
  h1 {
    font-weight: 700;
    font-size: 20px;
  }

  h2 {
    margin-top: 20px;
    font-weight: 400;
    font-size: 18px;
  }

  ul {
    padding: 20px;
    padding-bottom: 0;
    font-size: 16px;
    font-weight: 400;

    li {
      margin-bottom: 20px;
    }

    strong {
      text-decoration: underline;
      font-weight: 400;
      color: var(--purple-500);
      cursor: pointer;
    }
  }
`;

export const Select = styled.div`
  font-size: 18px;
  display: flex;
  justify-content: center;
  gap: 15px;
`;

interface ISelectOptionProps {
  $isActivated: boolean;
}

export const SelectOption = styled.div<ISelectOptionProps>`
  cursor: pointer;
  width: 150px;
  height: 75px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  border: 2px solid
    ${(props) => (props.$isActivated ? "var(--purple-500)" : "var(--gray-100)")};

  transition: 0.3s;
  &:hover {
    border: 2px solid var(--purple-500);
  }
`;
