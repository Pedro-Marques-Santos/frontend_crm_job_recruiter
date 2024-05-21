"use client";

import styled from "styled-components";

export const ContentContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-height: 660px) and (max-width: 500px) {
    justify-content: start;
    align-items: start;
  }
  background: var(--gray-100);
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  margin-left: 8px;
  margin-right: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;
