"use client";

import { FormRegister } from "@/components/Forms/Form.register.components/FormRegister";
import { RegisterImg } from "../RegisterImg";
import { Container, Content, ContentContainer } from "./styles";

interface IRegister {
  idtoken: string;
}

export function Register({ idtoken }: IRegister) {
  return (
    <Content>
      <ContentContainer>
        <Container>
          <RegisterImg />
          <FormRegister idtoken={idtoken} />
        </Container>
      </ContentContainer>
    </Content>
  );
}
