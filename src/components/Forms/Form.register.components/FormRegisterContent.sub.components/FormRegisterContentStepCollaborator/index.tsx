import {
  Icon,
  InputContainer,
  InputContent,
  Input,
  InputName,
  Error,
  ErrorDescription,
  Container,
  InputContainerDateAndLinkedin,
  ErrorLinkedin,
} from "./styles";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { CiLinkedin } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { PiUserFocusThin } from "react-icons/pi";
import { useFormContext, Controller } from "react-hook-form";

interface IFormRegisterContentCollaborator {
  typeFormContentStepTwo: string;
}

export function FormRegisterContentCollaborator({
  typeFormContentStepTwo,
}: IFormRegisterContentCollaborator) {
  const {
    register,
    formState: { errors },
    control,
  } = useFormContext();

  return (
    <Container>
      {typeFormContentStepTwo === "collaborator" && (
        <>
          <h3>
            Please fill in your details so that we can register you as a user.
          </h3>
          <form>
            <InputContent>
              <InputContainer>
                <InputName>Name and surname</InputName>
                <input
                  type="text"
                  id=""
                  placeholder="name"
                  {...register("nameUser", {
                    required: "This field is mandatory!",
                    minLength: {
                      value: 5,
                      message: "Name must be at least 5 characters long",
                    },
                    maxLength: {
                      value: 25,
                      message: "Name cannot exceed 20 characters",
                    },
                  })}
                />
                <Icon>
                  <IoPersonOutline color="gray" size={19} />
                </Icon>
                <Error $stateError={errors.nameUser ? true : false}>
                  {errors.nameUser
                    ? errors.nameUser.message?.toString()
                    : "ERROR"}
                </Error>
              </InputContainer>
              <InputContainer>
                <InputName>E-mail</InputName>
                <input
                  type="text"
                  id=""
                  placeholder="email"
                  {...register("emailUser", {
                    required: "This field is mandatory",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                />
                <Icon>
                  <PiUserFocusThin color="gray" size={25} />
                </Icon>
                <Error $stateError={errors.emailUser ? true : false}>
                  {errors.emailUser
                    ? (errors.emailUser.message as string)
                    : "ERROR"}
                </Error>
              </InputContainer>
            </InputContent>
            <InputContent>
              <InputContainerDateAndLinkedin>
                <Input>Date of birth</Input>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker"]}>
                    <Controller
                      name="dateOfBirth"
                      control={control}
                      rules={{ required: "This field is mandatory" }}
                      render={({ field }) => (
                        <DatePicker
                          label="date"
                          value={field.value}
                          onChange={(date) => field.onChange(date)}
                        />
                      )}
                    />
                  </DemoContainer>
                </LocalizationProvider>
                <Error $stateError={errors.dateOfBirth ? true : false}>
                  {errors.dateOfBirth ? "This field is mandatory" : "ERROR"}
                </Error>
              </InputContainerDateAndLinkedin>
              <InputContainer>
                <InputName>Linkedin - URL</InputName>
                <input
                  type="text"
                  id=""
                  placeholder="www.linkedin.com/in/url"
                  {...register("linkedin", { required: true })}
                />
                <Icon>
                  <CiLinkedin color="gray" size={25} />
                </Icon>
                <ErrorLinkedin $stateError={errors.linkedin ? true : false}>
                  {errors.linkedin ? "This field is mandatory" : "ERROR"}
                </ErrorLinkedin>
              </InputContainer>
            </InputContent>
            <Input>Give a brief description of your experiences</Input>
            <textarea
              id="texto"
              placeholder="description..."
              {...register("description", {
                required: "This field is mandatory!",
                minLength: {
                  value: 19,
                  message: "Name must be at least 20 characters long",
                },
                maxLength: {
                  value: 150,
                  message: "Name cannot exceed 150 characters",
                },
              })}
            ></textarea>
            <ErrorDescription $stateError={errors.description ? true : false}>
              {errors.description
                ? errors.description.message?.toString()
                : "ERROR"}
            </ErrorDescription>
          </form>
        </>
      )}
    </Container>
  );
}
