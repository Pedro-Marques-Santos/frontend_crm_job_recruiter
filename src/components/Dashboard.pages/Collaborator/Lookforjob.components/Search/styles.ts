import styled from "styled-components";

export const ContentContainer = styled.div`
  margin-top: 25px;
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  input {
    padding-left: 12px;
    padding-right: 32px;
    width: 100%;
    font-size: 13.5px;
    max-width: 400px;
    height: 53.3px;
    color: var(--gray-800);
    border: 1px solid var(--gray-400);
    background: var(--white-500);
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const Button = styled.button`
  width: 100%;
  width: 75px;
  height: 53.3px;
  color: var(--white-500);
  font-size: 15px;
  font-weight: 500;
  background: var(--blue-500);
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  transition: 0.3s;
  &:hover {
    background: var(--blue-600);
  }
`;
