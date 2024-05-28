import { Container, Button } from "./styles";

interface IProversion {
  stateSidebar: boolean;
}

export function Proversion({ stateSidebar }: IProversion) {
  return (
    <Container $stateSidebar={stateSidebar}>
      <h5>Upgrade to PRO to get access all Features!</h5>
      <Button>Get Pro Now!</Button>
    </Container>
  );
}
