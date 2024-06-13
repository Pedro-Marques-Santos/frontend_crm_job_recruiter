import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const ContentContainer = styled.div`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  width: 100%;
  max-width: 500px;
  height: 100%;
  background: var(--white-500);
  padding: 20px;
  border-radius: 15px;
`;

export const ContentGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 5px;
  strong {
    margin-right: 4px;
    font-weight: 400;
  }
`;

export const Group = styled.span`
  border: 1px solid var(--gray-088);
  padding: 3px;
`;

export const Description = styled.div`
  margin-top: 20px;
  strong {
    font-weight: 400;
    margin-right: 4px;
  }
`;

export const Button = styled.button`
  margin-top: 15px;
  font-size: 18px;
  width: 100%;
  max-width: 180px;
  height: 45px;
  color: var(--white-500);
  background: var(--blue-500);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 5px;

  transition: 0.2s;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 8px;
  }
`;
