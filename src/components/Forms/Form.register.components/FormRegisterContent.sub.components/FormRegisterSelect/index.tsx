import { useFormContext } from "react-hook-form";
import { ButtonBack, ButtonNext, Container } from "./styles";

interface IFormRegisterSelect {
  buttonNextSelectOption: () => void;
  buttonBackSelectOption: () => void;
  stateStepperOption: number;
}

export function FormRegisterSelect({
  buttonNextSelectOption,
  buttonBackSelectOption,
  stateStepperOption,
}: IFormRegisterSelect) {
  const { trigger } = useFormContext();

  const handleNextClick = async () => {
    const isValid = await trigger();
    if (isValid) {
      buttonNextSelectOption();
    }
  };

  return (
    <Container $stateStepperOption={stateStepperOption}>
      <ButtonBack
        $stateStepperOption={stateStepperOption}
        onClick={buttonBackSelectOption}
      >
        Previous step
      </ButtonBack>
      <ButtonNext onClick={handleNextClick} type="button">
        {stateStepperOption === 3 ? "Finish" : "Next step"}
      </ButtonNext>
    </Container>
  );
}
