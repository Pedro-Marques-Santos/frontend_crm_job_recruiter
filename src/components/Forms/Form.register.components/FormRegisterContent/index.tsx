import { FormRegisterContentStepFour } from "../FormRegisterContentStepFour";
import { FormRegisterContentStepOne } from "../FormRegisterContentStepOne";
import { FormRegisterContentStepThree } from "../FormRegisterContentStepThree";
import { FormRegisterContentStepTwo } from "../FormRegisterContentStepTwo";
import { Container } from "./styles";

interface IFormRegisterContent {
  stateStepperOption: number;
  changeTypeFormRegister: (type: string) => void;
  typeFormRegister: string;
  addImagemProfile: (image: File | null) => void;
  image: File | null;
}

export function FormRegisterContent({
  stateStepperOption,
  changeTypeFormRegister,
  typeFormRegister,
  addImagemProfile,
  image,
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
          addImagemProfile={addImagemProfile}
          typeFormContentStepThree={typeFormRegister}
          image={image}
        />
      )}
      {stateStepperOption === 3 && <FormRegisterContentStepFour />}
    </Container>
  );
}
