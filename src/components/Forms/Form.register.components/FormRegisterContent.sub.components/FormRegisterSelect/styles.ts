import styled from "styled-components";

interface IContainerProps {
  $stateStepperOption: number;
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  justify-content: ${({ $stateStepperOption }) =>
    $stateStepperOption === 0 ? "end" : "space-between"};
  padding-left: 15px;
  padding-right: 15px;
`;

export const ButtonNext = styled.button`
  width: 130px;
  height: 50px;
  border-radius: 50px;

  background: var(--purple-500);
  color: var(--white-500);

  font-size: 16px;
  font-weight: 600;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  transition: 0.2s;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 8px;
  }
`;

interface IButtonBack {
  $stateStepperOption: number;
}

export const ButtonBack = styled.button<IButtonBack>`
  display: ${({ $stateStepperOption }) =>
    $stateStepperOption === 0 ? "none" : "flex"};
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 50px;
  border-radius: 50px;

  font-size: 16px;

  border: 2px solid gray;
  background: var(--white-500);

  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  border: 2px solid var(--purple-600);

  color: var(--purple-500);
  font-weight: 600;

  transition: 0.2s;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 8px;
  }
`;
