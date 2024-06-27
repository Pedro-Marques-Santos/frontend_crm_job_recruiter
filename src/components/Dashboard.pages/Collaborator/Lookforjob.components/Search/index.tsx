import { IoIosSearch } from "react-icons/io";
import { Button, Container, ContentContainer, Icon } from "./styles";

export function Search() {
  return (
    <ContentContainer>
      <Container>
        <input
          type="text"
          name=""
          placeholder="Search for: company name and job vacancy"
          id=""
        />
      </Container>
      <Button>Search</Button>
    </ContentContainer>
  );
}
