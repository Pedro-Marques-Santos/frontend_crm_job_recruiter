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
  return (
    <Container $stateStepperOption={stateStepperOption}>
      <ButtonBack
        $stateStepperOption={stateStepperOption}
        onClick={buttonBackSelectOption}
      >
        Previous step
      </ButtonBack>
      <ButtonNext onClick={buttonNextSelectOption}>
        {stateStepperOption === 3 ? "Finish" : "Next step"}
      </ButtonNext>
    </Container>
  );
}
