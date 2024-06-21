import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  img {
    width: 100%;
    max-width: 200px;
    border-radius: 100%;
    border: 2px solid var(--gray-400);
    padding: 2px;
  }
`;

export const Button = styled.button`
  margin-top: 5px;
  padding: 5px;
  border-radius: 3px;
  font-size: 12px;
  border: 1px solid var(--gray-600);
  color: var(--black-300);
  background: var(--gray-100);
`;
