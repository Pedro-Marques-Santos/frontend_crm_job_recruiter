import styled from "styled-components";

export const ContentContainer = styled.div`
  width: 85%;
  padding: 10px;
  padding-bottom: 63px;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  background: var(--white-500);
`;

export const Container = styled.div`
  padding: 15px;
  background: var(--white-500);
`;

export const ContainerTitleAndMainElements = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerSearchAndSelect = styled.div`
  width: 100%;
  max-width: 240px;
  display: flex;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
`;

export const TableHeader = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  h6 {
    font-weight: 300;
    font-size: 13px;
  }
`;

export const TableInProgress = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: auto;
  max-height: 100%;
  max-height: 224px;

  &::-webkit-scrollbar {
    width: 6px; /* Largura do scrollbar */
    height: 6px; /* Altura do scrollbar horizontal, se necessário */
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--gray-400); /* Cor do thumb (indicador do scroll) */
  }

  &::-webkit-scrollbar-track {
    background-color: var(--gray-020); /* Cor do track (trilho) */
  }
`;

export const TableBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: var(--gray-080);
  h4 {
    padding-left: 8px;
    font-weight: 400;
    font-size: 12px;
    max-width: 120px;
  }

  h3 {
    font-weight: 400;
    font-size: 12px;
    max-width: 120px;
    padding-left: 2px;
    padding-right: 2px;
  }

  h5 {
    font-weight: 400;
    font-size: 12px;
    padding-right: 2px;
  }
`;

export const TableBodyImgAndName = styled.div`
  display: flex;
  align-items: center;
`;
