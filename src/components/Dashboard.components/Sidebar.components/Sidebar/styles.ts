import styled from "styled-components";

interface IContainer {
  $stateSidebar: boolean;
}

export const Container = styled.div<IContainer>`
  width: 100%;
  max-width: ${({ $stateSidebar }) => ($stateSidebar ? "80px" : "300px")};
  transition: max-width 1s ease;
  background-color: var(--white-500);
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  padding: 20px 10px 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContainerLogoAndMenu = styled.div``;

export const ContentLogo = styled.div`
  display: flex;
  align-items: center;
  color: var(--purple-600);

  h4 {
    margin-left: 20px;
    font-size: 22px;
    font-weight: 500;
    strong {
      font-weight: 500;
      color: var(--blue-500);
    }
  }
`;

interface ILinkMenu {
  $isActivity: boolean;
}

export const LinkMenu = styled.div<ILinkMenu>`
  height: 40px;
  padding-top: 1.5px;
  padding-bottom: 1.5px;
  color: var(--gray-800);
  font-size: 17px;
  margin-bottom: 12px;
  font-weight: 400;
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 1px solid
    ${({ $isActivity }) =>
      $isActivity ? "var(--gray-300)" : "var(--gray-088)"};
  background: ${({ $isActivity }) =>
    $isActivity ? "var(--gray-020)" : "var(--white-500)"};
  border-radius: 8px;
  margin-right: 8px;
`;

export const ContentMenu = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  white-space: nowrap;
  margin-top: 30px;
`;

export const Icon = styled.div`
  margin-right: 20px;
  min-width: 40px;
  display: flex;
  justify-content: center;
`;

export const ContainerUpgrade = styled.div``;
