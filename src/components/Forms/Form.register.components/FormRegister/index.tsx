"use client";

import { useState } from "react";

import { FormRegisterContent } from "../FormRegisterContent";
import { FormRegisterSelect } from "../FormRegisterContent.sub.components/FormRegisterSelect";
import { FormRegisterStepper } from "../FormRegisterContent.sub.components/FormRegisterStepper";
import { Container, LineGray } from "./styles";

import { FormProvider, useForm } from "react-hook-form";
import { CustomApplicationResource } from "../CustomAplicationResouve";

interface IFormRegister {
  idtoken: string;
}

export function FormRegister({ idtoken }: IFormRegister) {
  const [typeFormRegister, setTypeFormRegister] = useState("business");
  const [stateStepperOption, setStateStepperOption] = useState(0);

  const [image, setImage] = useState<File | null>(null);

  const DEFAULT_VALUES: CustomApplicationResource = {
    nameUser: "",
    emailUser: "",
    dataofbirth: "",
    emailCompany: "",
    description: "",
    linkedin: "",
    companyname: "",
    image: null,
    dateOfBirth: null,
  };

  const buttonNextSelectOption = async () => {
    const isValid = await methods.trigger();
    if (isValid) {
      if (stateStepperOption < 3) {
        setStateStepperOption(stateStepperOption + 1);
      } else {
        methods.handleSubmit((data) => console.log(data))();
      }
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

  const methods = useForm<CustomApplicationResource>({
    defaultValues: DEFAULT_VALUES,
  });

  const addImagemProfile = (image: File | null) => {
    setImage(image);
  };

  return (
    <Container>
      <FormProvider {...methods}>
        <FormRegisterStepper stateStepperOption={stateStepperOption} />
        <LineGray />
        <FormRegisterContent
          typeFormRegister={typeFormRegister}
          changeTypeFormRegister={changeTypeFormRegister}
          stateStepperOption={stateStepperOption}
          addImagemProfile={addImagemProfile}
          image={image}
        />
        <FormRegisterSelect
          buttonNextSelectOption={buttonNextSelectOption}
          buttonBackSelectOption={buttonBackSelectOption}
          stateStepperOption={stateStepperOption}
        />
      </FormProvider>
    </Container>
  );
}
