import styled from "styled-components";

export const Container = styled.div`
  h1 {
    font-weight: 400;
    font-size: 22px;
    color: var(--black-300);
  }
`;

export const ContentContainer = styled.div`
  margin-top: 45px;
  display: flex;
  @media (max-width: 900px) {
    flex-wrap: wrap;
  }
`;
