import { IoIosSearch } from "react-icons/io";

import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 140px;
  input {
    border-radius: 10px;
    padding-left: 12px;
    padding-right: 32px;
    width: 100%;
    font-size: 13.5px;
    max-width: 280px;
    height: 40px;
    color: var(--gray-800);
    border: 1px solid var(--gray-400);
    background: var(--white-500);
  }
`;

const Icon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export function SearchOngoingVacancies() {
  return (
    <Container>
      <input type="text" name="" placeholder="Company" id="" />
      <Icon>
        <IoIosSearch size={21} color="gray" />
      </Icon>
    </Container>
  );
}
