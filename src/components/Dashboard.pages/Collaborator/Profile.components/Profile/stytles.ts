import styled from "styled-components";

export const Container = styled.div`
  h5 {
    font-weight: 400;
    font-size: 22px;
    color: var(--black-300);
  }
`;

export const ContentContainer = styled.div`
  margin-top: 25px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Button = styled.button`
  margin-top: 15px;
  font-size: 18px;
  width: 100%;
  max-width: 180px;
  height: 45px;
  color: var(--white-500);
  background: var(--blue-500);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 5px;

  transition: 0.2s;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 8px;
  }
`;
