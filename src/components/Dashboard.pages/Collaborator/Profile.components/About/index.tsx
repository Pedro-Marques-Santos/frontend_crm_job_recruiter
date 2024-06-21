import {
  Container,
  ContentGroup,
  Description,
  Group,
  ContentContainer,
  MainInformation,
} from "./styles";
import { useAppSelector } from "@/store";

export function About() {
  const user = useAppSelector((state) => state.user.userState);

  const dobDate = user?.status ? new Date(user.status.date) : null;

  return (
    <Container>
      {user ? (
        <ContentContainer>
          <MainInformation>
            <h1>
              <strong>Name: </strong> {user.status.name}
            </h1>
          </MainInformation>
          <MainInformation>
            <h1>
              <strong>E-mail: </strong> {user.status.email}
            </h1>
          </MainInformation>
          <MainInformation>
            <h1>
              <strong>Date of Birth: </strong>
              {dobDate && dobDate.toLocaleDateString("en-US")}
            </h1>
          </MainInformation>
          <MainInformation>
            <h1>
              <strong>Linkedin: </strong> {user.status.linkedinURL}
            </h1>
          </MainInformation>
          <ContentGroup>
            <strong>Working group belonging:</strong>
            {user.status.workingGroup.map((job: string, index: number) => {
              return <Group key={index}>{job}</Group>;
            })}
          </ContentGroup>
          <Description>
            <strong>Description:</strong> {user.status.description}
          </Description>
        </ContentContainer>
      ) : null}
    </Container>
  );
}
