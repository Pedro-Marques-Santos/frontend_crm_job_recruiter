import { About } from "../About";
import { MainInformation } from "../MainInformation";
import { Container, ContentContainer } from "./stytles";

export function Profile() {
  return (
    <Container>
      <h1>Profile</h1>
      <ContentContainer>
        <MainInformation />
        <About />
      </ContentContainer>
    </Container>
  );
}
