import { useFormContext } from "react-hook-form";
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
  const {
    register,
    formState: { errors },
  } = useFormContext();

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
                <input
                  type="text"
                  id=""
                  placeholder="company"
                  {...register("companyname", { required: true })}
                />
                <Icon>
                  <IoPersonOutline color="gray" size={19} />
                </Icon>
                <Error $stateError={errors.companyname ? true : false}>
                  {errors.companyname ? "This field is mandatory" : "ERROR"}
                </Error>
              </InputContainer>
              <InputContainer>
                <InputName>E-mail</InputName>
                <input
                  type="text"
                  id=""
                  placeholder="email"
                  {...register("emailCompany", {
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
                <Error $stateError={errors.emailCompany ? true : false}>
                  {errors.emailCompany
                    ? (errors.emailCompany.message as string)
                    : "ERROR"}
                </Error>
              </InputContainer>
            </InputContent>
          </form>
        </Container>
      )}
    </>
  );
}
