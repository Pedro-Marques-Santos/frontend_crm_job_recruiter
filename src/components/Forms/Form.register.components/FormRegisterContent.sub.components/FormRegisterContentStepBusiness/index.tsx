import {
  Container,
  Icon,
  InputContainer,
  InputContent,
  Error,
  InputName,
} from "./styles";

import { IoPersonOutline } from "react-icons/io5";
import { PiUserFocusThin } from "react-icons/pi";

interface IFormRegisterContentStepBusiness {
  typeFormContentStepTwo: string;
}

export function FormRegisterContentStepBusiness({
  typeFormContentStepTwo,
}: IFormRegisterContentStepBusiness) {
  return (
    <>
      {typeFormContentStepTwo === "business" && (
        <Container>
          <h3>
            Please fill in your details so that we can register you as a
            business.
          </h3>
          <form action="">
            <InputContent>
              <InputContainer>
                <InputName>Company Name</InputName>
                <input type="text" name="name" id="" placeholder="company" />
                <Icon>
                  <IoPersonOutline color="gray" size={19} />
                </Icon>
                <Error>This field is mandatory!</Error>
              </InputContainer>
              <InputContainer>
                <InputName>Account manager name</InputName>
                <input type="text" name="lastname" id="" placeholder="name" />
                <Icon>
                  <PiUserFocusThin color="gray" size={25} />
                </Icon>
                <Error>This field is mandatory!</Error>
              </InputContainer>
            </InputContent>
          </form>
        </Container>
      )}
    </>
  );
}
