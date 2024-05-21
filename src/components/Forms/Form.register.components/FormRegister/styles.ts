"use client";

import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 8px;
  background-color: var(--white-500);

  padding-top: 20px;
  padding-bottom: 20px;

  @media (max-width: 900px) {
    width: 100%;
  }
  overflow-y: auto;
  height: 100%;
`;

export const LineGray = styled.div`
  margin-top: 20px;
  border: 1px solid #edeef4;
`;
