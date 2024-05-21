"use client";

import { FormRegisterDropFile } from "../FormRegisterContent.sub.components/FormRegisterDropFile";
import { FormRegisterFreePlan } from "../FormRegisterContent.sub.components/FormRegisterFreePlan";
import { Container } from "./styles";

interface IFormRegisterContentStepThree {
  typeFormContentStepThree: string;
}

export function FormRegisterContentStepThree({
  typeFormContentStepThree,
}: IFormRegisterContentStepThree) {
  return (
    <Container>
      {typeFormContentStepThree === "business" && <FormRegisterFreePlan />}
      {typeFormContentStepThree === "collaborator" && <FormRegisterDropFile />}
    </Container>
  );
}
