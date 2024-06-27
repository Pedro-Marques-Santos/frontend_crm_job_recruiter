import styled from "styled-components";

export const Container = styled.div`
  max-width: 320px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 15px;
  font-size: 16px;
  background: var(--white-500);
  cursor: pointer;
  border-radius: 8px;
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 12px;
`;

export const NameAgency = styled.div`
  font-size: 16.5px;
`;

export const ContainerSecondaryInformation = styled.div`
  margin-top: 12px;
`;

export const Icon = styled.div`
  display: flex;
  margin-right: 3px;
  font-size: 17px;
`;

export const SecondaryInformation = styled.div`
  h2 {
    display: flex;
    align-items: center;
    font-size: 14.5px;
    font-weight: 400;
  }
`;

export const Wage = styled.div`
  margin-top: 12px;
  padding: 6px;
  display: inline-block;
  border-radius: 8px;
  background: var(--gray-080);
`;

export const Description = styled.div`
  margin-top: 12px;
  font-size: 14px;
`;

export const Date = styled.div`
  margin-top: 12px;
  font-size: 12px;
  color: var(--black-300);
`;
