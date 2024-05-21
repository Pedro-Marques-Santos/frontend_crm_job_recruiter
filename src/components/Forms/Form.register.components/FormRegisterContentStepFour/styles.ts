import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;

  h1 {
    max-width: 350px;
    font-weight: 500;
    font-size: 30px;
    color: var(--black-300);
  }

  h3 {
    font-size: 17.5px;
    margin-top: 18px;
    font-weight: 400;
    max-width: 400px;
    color: var(--gray-700);
  }
`;
