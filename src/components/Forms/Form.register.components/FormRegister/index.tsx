"use client";

import { useState } from "react";

import { FormRegisterContent } from "../FormRegisterContent";
import { FormRegisterSelect } from "../FormRegisterContent.sub.components/FormRegisterSelect";
import { FormRegisterStepper } from "../FormRegisterContent.sub.components/FormRegisterStepper";
import { Container, LineGray } from "./styles";

import { FormProvider, useForm } from "react-hook-form";
import { CustomApplicationResource } from "../CustomAplicationResource";

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
    emailCompany: "",
    description: "",
    linkedin: "",
    companyname: "",
    SelectedJobs: [],
    image: null,
    dateOfBirth: null,
  };

  const buttonNextSelectOption = async () => {
    const isValid = await methods.trigger();
    if (isValid) {
      if (stateStepperOption < 3) {
        setStateStepperOption(stateStepperOption + 1);
      } else {
        methods.handleSubmit((data) => fetchCreateAccount(data))();
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

  async function fetchCreateAccount(dataForm: CustomApplicationResource) {
    if (typeFormRegister === "business") {
      const token = idtoken;

      const formData = new FormData();
      formData.append("name", dataForm.companyname);
      formData.append("email", dataForm.emailCompany);

      if (dataForm.image) {
        formData.append("file", dataForm.image, dataForm.image.name);
      }

      formData.append("isRecruiter", "true");

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_DB_HOST}createCompany`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
            },
            body: formData,
          }
        );

        if (!response.ok) {
          const errorResponse = await response.json();
          throw new Error(`Error: ${errorResponse.message}`);
        }

        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.error("Error:", error);
      }
    }
    if (typeFormRegister === "collaborator") {
      const token = idtoken;

      const formData = new FormData();
      formData.append("name", dataForm.nameUser);
      formData.append("linkedinURL", dataForm.linkedin);
      formData.append("email", dataForm.emailUser);
      formData.append("description", dataForm.description);

      const dateOfBirth = dataForm.dateOfBirth
        ? dataForm.dateOfBirth.toISOString()
        : "";
      formData.append("date", dateOfBirth);
      formData.append("isRecruiter", "false");

      if (dataForm.image) {
        formData.append("file", dataForm.image, dataForm.image.name);
      }

      dataForm.SelectedJobs.forEach((job) => {
        formData.append(`workingGroup[]`, job);
      });

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_DB_HOST}createUser`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
            },
            body: formData,
          }
        );

        if (!response.ok) {
          const errorResponse = await response.json();
          throw new Error(`Error: ${errorResponse.message}`);
        }

        const result = await response.json();
        console.log(response);
      } catch (error) {
        console.error("Error:", error);
      }
    }
  }

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
