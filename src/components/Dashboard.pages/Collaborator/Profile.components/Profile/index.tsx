import { About } from "../About";
import { MainInformation } from "../MainInformation";
import { Button, Container, ContentContainer } from "./stytles";

export function Profile() {
  return (
    <Container>
      <h5>Profile</h5>
      <ContentContainer>
        <MainInformation />
        <About />
      </ContentContainer>
      <Button>Edit profile</Button>
    </Container>
  );
}
