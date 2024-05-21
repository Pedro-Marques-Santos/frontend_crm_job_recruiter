import {
  Icon,
  InputContainer,
  InputContent,
  Input,
  InputName,
  Error,
  ErrorDescription,
  Container,
} from "./styles";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { IoPersonOutline } from "react-icons/io5";
import { PiUserFocusThin } from "react-icons/pi";

interface IFormRegisterContentCollaborator {
  typeFormContentStepTwo: string;
}

export function FormRegisterContentCollaborator({
  typeFormContentStepTwo,
}: IFormRegisterContentCollaborator) {
  return (
    <Container>
      {typeFormContentStepTwo === "collaborator" && (
        <>
          <h3>
            Please fill in your details so that we can register you as a user.
          </h3>
          <form action="">
            <InputContent>
              <InputContainer>
                <InputName>Name</InputName>
                <input type="text" name="name" id="" placeholder="name" />
                <Icon>
                  <IoPersonOutline color="gray" size={19} />
                </Icon>
                <Error>This field is mandatory!</Error>
              </InputContainer>
              <InputContainer>
                <InputName>Lastname</InputName>
                <input
                  type="text"
                  name="lastname"
                  id=""
                  placeholder="lastname"
                />
                <Icon>
                  <PiUserFocusThin color="gray" size={25} />
                </Icon>
                <Error>This field is mandatory!</Error>
              </InputContainer>
            </InputContent>
            <Input>Date of birth</Input>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker label="date" />
              </DemoContainer>
            </LocalizationProvider>
            <Error>This field is mandatory!</Error>
            <Input>Give a brief description of your experiences</Input>
            <textarea
              id="texto"
              name="texto"
              placeholder="description..."
            ></textarea>
            <ErrorDescription>This field is mandatory!</ErrorDescription>
          </form>
        </>
      )}
    </Container>
  );
}
