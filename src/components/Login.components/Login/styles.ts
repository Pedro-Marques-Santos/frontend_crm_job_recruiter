"use client";

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: var(--gray-100);
`;

export const ContentContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
  background: var(--gray-100);

  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
  }
`;
