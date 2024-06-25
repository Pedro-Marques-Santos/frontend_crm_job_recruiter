import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 20px;
  padding-bottom: 30px;
`;

export const ChartWrapper = styled.div`
  width: 100%;
  max-width: 520px;
  height: 300px;
  @media (max-width: 900px) {
    max-width: 1000px;
  }
`;
