import { Imgprofile } from "../Imgprofile";
import { Container, Information, SeconduryInformation } from "./styles";

export function MainInformation() {
  return (
    <Container>
      <Imgprofile />
      <Information>
        <h4>Name: Pedro</h4>
        <h4>lastname: Santos</h4>
        <h4>Date of birth: 30/07/2002</h4>
      </Information>
      <SeconduryInformation>
        <h3>E-mail: pedromarquesnoot@outlook.com</h3>
        <h3>LinkedIn: www.linkedin.com/in/pedromarques01</h3>
      </SeconduryInformation>
    </Container>
  );
}
