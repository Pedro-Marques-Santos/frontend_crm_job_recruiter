import { Container, Icon } from "./styles";

import { IoIosSearch } from "react-icons/io";

export function Searchvacancies() {
  return (
    <Container>
      <input
        type="text"
        name=""
        placeholder="Enter the name of the job or company"
        id=""
      />
      <Icon>
        <IoIosSearch size={21} color="gray" />
      </Icon>
    </Container>
  );
}
