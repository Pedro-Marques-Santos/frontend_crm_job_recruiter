"use client";

import { Container } from "./styles";

import { FormRegisterContentCollaborator } from "../FormRegisterContent.sub.components/FormRegisterContentStepCollaborator";
import { FormRegisterContentStepBusiness } from "../FormRegisterContent.sub.components/FormRegisterContentStepBusiness";

interface IFormRegisterContentStepTwo {
  typeFormContentStepTwo: string;
}

export function FormRegisterContentStepTwo({
  typeFormContentStepTwo = "business",
}: IFormRegisterContentStepTwo) {
  return (
    <Container>
      <h2>Register details</h2>
      <FormRegisterContentCollaborator
        typeFormContentStepTwo={typeFormContentStepTwo}
      />
      <FormRegisterContentStepBusiness
        typeFormContentStepTwo={typeFormContentStepTwo}
      />
    </Container>
  );
}
