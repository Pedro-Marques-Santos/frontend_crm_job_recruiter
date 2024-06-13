"use client";

import styled from "styled-components";

export const Content = styled.div`
  background: var(--gray-100);
  height: 100vh;
  @media (max-width: 600px) {
    height: auto;
    min-height: 100vh;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    align-items: start;
    min-height: 100vh;
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
  background: var(--gray-100);
  @media (max-width: 900px) {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;
