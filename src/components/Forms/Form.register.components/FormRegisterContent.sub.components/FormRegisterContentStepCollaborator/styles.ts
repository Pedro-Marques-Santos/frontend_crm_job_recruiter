import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  h3 {
    margin-top: 2px;
    font-size: 18px;
    font-weight: 400;
    color: var(--gray-700);
  }

  form {
    width: 100%;
    position: relative;
  }

  textarea {
    margin-top: 8px;
    width: 100%;
    min-height: 80px;
    max-height: 100px;
    border: none;
    background: var(--white-500);
    box-shadow: rgba(0, 0, 0, 0.09) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.09) 0px 0px 0px 1px;
    font-size: 17px;
    color: var(--gray-700);
    border-radius: 12px;
    padding: 10px;
    outline: none;
  }
`;

interface IError {
  $stateError: boolean;
}

export const Error = styled.div<IError>`
  margin-top: 4px;
  font-size: 12px;
  color: ${({ $stateError }) => ($stateError ? "red" : "transparent")};
`;

export const ErrorDescription = styled.div<IError>`
  font-size: 12px;
  color: ${({ $stateError }) => ($stateError ? "red" : "transparent")};
`;

export const ErrorLinkedin = styled.div<IError>`
  margin-top: 6.3px;

  font-size: 12px;
  color: ${({ $stateError }) => ($stateError ? "red" : "transparent")};
  @media (max-width: 600px) {
    margin-top: 4px;
  }
`;

export const InputName = styled.div`
  margin-bottom: 8px;
  font-size: 16px;
  color: var(--purple-800);
`;

export const Input = styled.div`
  margin-top: 10px;
  font-size: 16px;
  color: var(--purple-800);
`;

export const InputContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5px;
`;

export const InputContainerDateAndLinkedin = styled.div`
  width: calc(50% - 5px);
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const InputContainer = styled.div`
  margin-top: 12px;
  position: relative;
  z-index: 20;
  width: calc(50% - 5px);
  input {
    width: 100%;
    height: 50px;
    padding: 10px;
    padding-left: 15px;
    padding-right: 35px;
    font-size: 17px;
    color: var(--gray-700);
    border-radius: 12px;
    background: var(--white-500);
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 40px;
  display: flex;
  font-size: 18px;
  right: 0;
  margin-right: 10px;
`;
