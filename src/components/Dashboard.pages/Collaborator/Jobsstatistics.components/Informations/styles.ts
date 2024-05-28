import styled from "styled-components";

export const Container = styled.div`
  margin-top: 25px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Box = styled.div`
  display: flex;
  padding: 15px;
  border-radius: 25px;
  background: var(--white-500);
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
`;

export const ContentBox = styled.div`
  padding-left: 12px;
  padding-right: 12px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  h5 {
    font-size: 16px;
    font-weight: 400;
  }

  h4 {
    font-size: 29px;
    font-weight: 500;
  }
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 100%;
  max-width: 55px;
  height: 55px;
  border-radius: 100%;
  border: 2px solid var(--gray-088);
  background: linear-gradient(
    to bottom,
    var(--purple-650) 60%,
    var(--blue-500)
  );
`;
