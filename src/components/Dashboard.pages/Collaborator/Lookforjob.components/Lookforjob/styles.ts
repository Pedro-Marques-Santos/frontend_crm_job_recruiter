import styled from "styled-components";

export const Container = styled.div`
  h1 {
    font-weight: 400;
    font-size: 22px;
    color: var(--black-300);
  }
`;

export const ContainerSelects = styled.div`
  margin-top: 20px;
  gap: 12px;
  display: flex;
  @media (max-width: 700px) {
    flex-wrap: wrap;
  }
`;

export const ContainerJobs = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 40px;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;
