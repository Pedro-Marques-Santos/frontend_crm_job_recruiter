"use client";

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: var(--gray-100);
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    margin-bottom: 30px;
  }
`;

export const ImgResolutionBig = styled.div`
  @media (max-width: 900px) {
    display: none;
  }
`;

export const ImgResolutionSmall = styled.div`
  @media (min-width: 900px) {
    display: none;
  }
`;
