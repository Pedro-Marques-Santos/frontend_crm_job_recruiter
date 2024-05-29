import { Boxvacancies } from "../Boxvacancies";
import { Searchvacancies } from "../Searchvacancies";
import { Selectstatevacancies } from "../Selectstatevacancies";
import { Container, ContentBoxVacancies, ContentContainer } from "./styles";

export function Appliedvacancies() {
  return (
    <Container>
      <h1>My Applications</h1>
      <ContentContainer>
        <Selectstatevacancies />
        <Searchvacancies />
      </ContentContainer>
      <ContentBoxVacancies>
        <Boxvacancies status={true} />
        <Boxvacancies status={true} />
        <Boxvacancies status={true} />
        <Boxvacancies status={false} />
      </ContentBoxVacancies>
    </Container>
  );
}
