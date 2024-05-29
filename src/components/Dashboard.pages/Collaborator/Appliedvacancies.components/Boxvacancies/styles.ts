import styled from "styled-components";

export const Container = styled.div`
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  padding: 15px;
  width: 100%;
  max-width: 280px;
  height: 180px;
  background: var(--white-500);
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContentVanancies = styled.div``;

export const ContainerNameAndLogo = styled.div`
  display: flex;
  align-items: center;

  h4 {
    margin-left: 8px;
    font-weight: 400;
    color: var(--gray-800);
  }
`;

export const ContainerAboutVacancies = styled.div`
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const About = styled.div`
  flex: 0 0 48%;
  display: flex;

  i {
    color: var(--gray-800);
  }

  h5 {
    margin-left: 3px;
    font-weight: 400;
    font-size: 12px;
  }
`;

export const ImageProfile = styled.div`
  display: flex;
  border: 1px solid var(--gray-400);
  background: white;
  border-radius: 100%;
  padding: 3px;
`;

interface IStatus {
  $status: boolean;
}

export const Status = styled.div<IStatus>`
  font-size: 23px;
  /* color: var(--blue-500); */
  color: ${({ $status }) => ($status ? "var(--blue-500)" : "var(--red-400)")};
  font-weight: 500;
`;
