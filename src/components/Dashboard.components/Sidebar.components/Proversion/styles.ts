import styled from "styled-components";

interface IContainer {
  $stateSidebar: boolean;
}

export const Container = styled.div<IContainer>`
  height: 150px;
  background: linear-gradient(
    to right,
    var(--purple-500) 5%,
    var(--blue-500) 90%
  );
  border-radius: 40px;
  display: ${({ $stateSidebar }) => ($stateSidebar ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;

  padding: 15px;

  h5 {
    text-align: center;
    font-size: 18px;
  }

  margin-bottom: 15px;
`;

export const Button = styled.button`
  font-size: 16px;
  font-weight: 600;
  border-radius: 15px;
  margin-top: 10px;
  width: 100%;
  color: var(--purple-700);
  height: 40px;
`;
