import {
  Container,
  ContentGroup,
  Description,
  Group,
  ContentContainer,
  Button,
} from "./styles";

export function About() {
  return (
    <Container>
      <ContentContainer>
        <ContentGroup>
          <strong>working group belonging:</strong>
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
      <Button>Edit Profile</Button>
    </Container>
  );
}
