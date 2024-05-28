import styled from "styled-components";

export const Container = styled.div`
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContentImg = styled.div`
  border: 1px solid var(--gray-400);
  width: 44px;
  height: 44px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    border-radius: 100%;
  }
`;

export const Contentprofile = styled.div`
  display: flex;
`;

export const Profile = styled.div`
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h5 {
    font-size: 14px;
    font-weight: 500;
  }

  h6 {
    font-size: 14px;
    font-weight: 300;
  }
`;

export const Icon = styled.div``;
