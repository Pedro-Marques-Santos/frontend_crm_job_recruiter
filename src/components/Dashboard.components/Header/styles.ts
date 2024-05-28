import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 35px;
`;

export const ContainerLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 22px;
  color: var(--black-300);
  strong {
    color: var(--gray-600);
  }
`;

export const Icon = styled.div`
  display: flex;
  margin-right: 15px;
  color: var(--black-300);
  cursor: pointer;
`;

export const ContentImg = styled.div`
  border: 1px solid var(--gray-400);
  width: 39px;
  height: 39px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    border-radius: 100%;
  }
`;

export const IconBell = styled.div`
  color: var(--gray-600);
  display: flex;
  align-items: center;
`;

export const ContainerRight = styled.div`
  display: flex;
  gap: 10px;
`;
