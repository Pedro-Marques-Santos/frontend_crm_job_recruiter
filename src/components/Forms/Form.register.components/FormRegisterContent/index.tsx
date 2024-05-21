import { FormRegisterContentStepFour } from "../FormRegisterContentStepFour";
import { FormRegisterContentStepOne } from "../FormRegisterContentStepOne";
import { FormRegisterContentStepThree } from "../FormRegisterContentStepThree";
import { FormRegisterContentStepTwo } from "../FormRegisterContentStepTwo";
import { Container } from "./styles";

interface IFormRegisterContent {
  stateStepperOption: number;
  changeTypeFormRegister: (type: string) => void;
  typeFormRegister: string;
}

export function FormRegisterContent({
  stateStepperOption,
  changeTypeFormRegister,
  typeFormRegister,
}: IFormRegisterContent) {
  return (
    <Container>
      {stateStepperOption === 0 && (
        <FormRegisterContentStepOne
          changeTypeFormRegister={changeTypeFormRegister}
          typeFormRegister={typeFormRegister}
        />
      )}
      {stateStepperOption === 1 && (
        <FormRegisterContentStepTwo typeFormContentStepTwo={typeFormRegister} />
      )}
      {stateStepperOption === 2 && (
        <FormRegisterContentStepThree
          typeFormContentStepThree={typeFormRegister}
        />
      )}
      {stateStepperOption === 3 && <FormRegisterContentStepFour />}
    </Container>
  );
}
