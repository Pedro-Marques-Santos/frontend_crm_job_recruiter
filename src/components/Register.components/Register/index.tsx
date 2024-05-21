"use client";

import { FormRegister } from "@/components/Forms/Form.register.components/FormRegister";
import { RegisterImg } from "../RegisterImg";
import { Container, ContentContainer } from "./styles";

export function Register() {
  return (
    <ContentContainer>
      <Container>
        <RegisterImg />
        <FormRegister />
      </Container>
    </ContentContainer>
  );
}
