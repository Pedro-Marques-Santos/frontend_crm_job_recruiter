"use client";

import { useState } from "react";

import { FormRegisterContent } from "../FormRegisterContent";
import { FormRegisterSelect } from "../FormRegisterContent.sub.components/FormRegisterSelect";
import { FormRegisterStepper } from "../FormRegisterContent.sub.components/FormRegisterStepper";
import { Container, LineGray } from "./styles";

export function FormRegister() {
  const [typeFormRegister, setTypeFormRegister] = useState("business");
  const [stateStepperOption, setStateStepperOption] = useState(0);

  const buttonNextSelectOption = () => {
    if (typeFormRegister === "business" || typeFormRegister === "collaborator")
      if (stateStepperOption < 3) {
        setStateStepperOption(stateStepperOption + 1);
      }
  };

  const buttonBackSelectOption = () => {
    if (stateStepperOption > 0) {
      setStateStepperOption(stateStepperOption - 1);
    }
  };

  const changeTypeFormRegister = (type: string) => {
    setTypeFormRegister(type);
  };

  return (
    <Container>
      <FormRegisterStepper stateStepperOption={stateStepperOption} />
      <LineGray />
      <FormRegisterContent
        typeFormRegister={typeFormRegister}
        changeTypeFormRegister={changeTypeFormRegister}
        stateStepperOption={stateStepperOption}
      />
      <FormRegisterSelect
        buttonNextSelectOption={buttonNextSelectOption}
        buttonBackSelectOption={buttonBackSelectOption}
        stateStepperOption={stateStepperOption}
      />
    </Container>
  );
}
