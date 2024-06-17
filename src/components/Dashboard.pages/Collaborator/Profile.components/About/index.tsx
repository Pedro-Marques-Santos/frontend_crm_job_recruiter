import {
  Container,
  ContentGroup,
  Description,
  Group,
  ContentContainer,
  Button,
  MainInformation,
} from "./styles";

export function About() {
  return (
    <Container>
      <ContentContainer>
        <MainInformation>
          <h1>
            <strong>Name: </strong> Pedro Marques
          </h1>
        </MainInformation>
        <MainInformation>
          <h1>
            <strong>E-mail: </strong> pedromarquesnoot@outlook.com
          </h1>
        </MainInformation>
        <MainInformation>
          <h1>
            <strong>Date of Birth: </strong> 30/07/2002
          </h1>
        </MainInformation>
        <MainInformation>
          <h1>
            <strong>Linkedin: </strong> www.linkedin.com/in/pedromarques01
          </h1>
        </MainInformation>
        <ContentGroup>
          <strong>Working group belonging:</strong>
          <Group>Development Analyst</Group>
          <Group>Programmer</Group>
          <Group>Developer</Group>
        </ContentGroup>
        <Description>
          <strong>Description:</strong> Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum has been the industry
          standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book.
        </Description>
      </ContentContainer>
    </Container>
  );
}
