import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 280px;
  input {
    border-radius: 10px;
    padding-left: 12px;
    padding-right: 32px;
    width: 100%;
    font-size: 13.5px;
    max-width: 280px;
    height: 40px;
    color: var(--gray-800);
    border: 1px solid var(--gray-400);
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;
