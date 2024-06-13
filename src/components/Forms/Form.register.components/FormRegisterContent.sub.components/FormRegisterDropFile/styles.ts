import styled from "styled-components";

export const Container = styled.div`
  h1 {
    font-size: 22px;
    font-weight: 500;
    color: var(--black-300);
  }

  h3 {
    margin-top: 5px;
    color: var(--gray-700);
    font-weight: 400;
  }
`;

export const ContainerDropFile = styled.div`
  margin-top: 20px;
  border: 2px dashed var(--gray-300);
  padding: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ImageLogo = styled.div``;

export const Title = styled.div`
  color: var(--black-300);
  padding-top: 15px;
  font-size: 17px;

  strong {
    cursor: pointer;
    padding: 8px;
    border-radius: 8px;
    color: var(--purple-600);
    border: 2px dashed var(--purple-600);
  }
`;

export const ContainerProfileImg = styled.div`
  margin-top: 20px;
  display: flex;
  padding: 10px;
  align-items: center;
  border: 1px solid var(--gray-300);
`;

export const ProfileImg = styled.div``;

export const ContianerProfile = styled.div`
  width: 100%;

  padding-left: 15px;
  h5 {
    font-size: 15px;
    font-weight: 500;
  }

  h6 {
    margin-top: 3px;
    font-size: 15px;
    font-weight: 400;
    color: var(--gray-700);
  }

  display: flex;
  justify-content: space-between;
`;

export const ContentProfile = styled.div`
  h3 {
    display: flex;
    align-items: center;
    justify-content: center;
    i {
      margin-top: 3px;
      margin-right: 3px;
    }
  }
`;

interface IError {
  $stateError: boolean;
}

export const Error = styled.div<IError>`
  margin-top: 2px;
  font-size: 12px;
  color: ${({ $stateError }) => ($stateError ? "red" : "transparent")};
`;
