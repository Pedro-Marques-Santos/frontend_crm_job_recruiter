import { SearchOngoingVacancies } from "./search";
import { SelectOngoigVanacies } from "./select";
import {
  Container,
  ContentContainer,
  Title,
  ContainerSearchAndSelect,
  ContainerTitleAndMainElements,
  Content,
  TableHeader,
  TableBody,
  TableBodyImgAndName,
  TableInProgress,
} from "./styles";

import Image from "next/image";

import img from "@/images/test/logoband.png";

export function Ongoingvanacies() {
  return (
    <ContentContainer>
      <Content>
        <Container>
          <ContainerTitleAndMainElements>
            <Title>In progress</Title>
            <ContainerSearchAndSelect>
              <SearchOngoingVacancies />
              <SelectOngoigVanacies />
            </ContainerSearchAndSelect>
          </ContainerTitleAndMainElements>
          <TableHeader>
            <h6>Comapany</h6>
            <h6>Name of the vacancy</h6>
            <h6>Step</h6>
          </TableHeader>
        </Container>
        <TableInProgress>
          <ContentTableBody />
          <ContentTableBody />
          <ContentTableBody />
          <ContentTableBody />
          <ContentTableBody />
        </TableInProgress>
      </Content>
    </ContentContainer>
  );
}

export function ContentTableBody() {
  return (
    <>
      <TableBody>
        <TableBodyImgAndName>
          <Image src={img} width={30} height={30} alt="Picture of the author" />
          <h4>Agência band TV</h4>
        </TableBodyImgAndName>
        <h3>Desenvolvedor Full Stack</h3>
        <h5>Step 1</h5>
      </TableBody>
    </>
  );
}
