import { Chart } from "../Chart.components/Chart";
import { Informations } from "../Informations";
import { Ongoingvanacies } from "../Ongoingvacancies";
import { Container, ContentContainer } from "./styles";

export function Jobsstatistics() {
  return (
    <Container>
      <h1>My journey to find the perfect job!</h1>
      <Informations />
      <ContentContainer>
        <Chart />
        <Ongoingvanacies />
      </ContentContainer>
    </Container>
  );
}
