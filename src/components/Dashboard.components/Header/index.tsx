import {
  Container,
  ContainerLeft,
  ContainerRight,
  Icon,
  IconBell,
  Title,
} from "./styles";

import { FaBell } from "react-icons/fa6";
import { TfiAlignLeft } from "react-icons/tfi";

interface IHeader {
  modifyStatesidebar: () => void;
}

export function Header({ modifyStatesidebar }: IHeader) {
  return (
    <Container>
      <ContainerLeft>
        <Icon onClick={modifyStatesidebar}>
          <TfiAlignLeft size={20} />
        </Icon>
        <Title>
          <strong>Hi</strong> Pedro
        </Title>
      </ContainerLeft>
      <ContainerRight>
        <IconBell>
          <FaBell size={22} />
        </IconBell>
      </ContainerRight>
    </Container>
  );
}
