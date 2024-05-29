import styled from "styled-components";

export const Container = styled.div`
  border-radius: 15px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  width: 100%;
  max-width: 350px;
  background: var(--white-500);
  padding: 20px;
`;

export const Information = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  h4 {
    font-weight: 300;
    font-size: 20px;
  }
`;

export const SeconduryInformation = styled.div`
  margin-top: 15px;
  h3 {
    font-weight: 400;
    font-size: 14px;
  }
`;
