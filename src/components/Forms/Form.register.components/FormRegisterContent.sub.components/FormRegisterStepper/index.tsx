import {
  ColorlibConnectorFormRegister,
  ColorlibStepIconRootFormRegister,
  Container,
  TitleRegisterForm,
} from "./styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { StepIconProps } from "@mui/material/StepIcon";

function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <TitleRegisterForm>1</TitleRegisterForm>,
    2: <TitleRegisterForm>2</TitleRegisterForm>,
    3: <TitleRegisterForm>3</TitleRegisterForm>,
    4: <TitleRegisterForm>4</TitleRegisterForm>,
  };

  return (
    <ColorlibStepIconRootFormRegister
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRootFormRegister>
  );
}

const steps = ["", "", "", ""];

interface IFormRegisterStepper {
  stateStepperOption: number;
}

export function FormRegisterStepper({
  stateStepperOption,
}: IFormRegisterStepper) {
  return (
    <Container>
      <Stack sx={{ width: "100%" }} spacing={4}>
        <Stepper
          alternativeLabel
          activeStep={stateStepperOption}
          connector={<ColorlibConnectorFormRegister />}
        >
          {steps.map((label, index) => (
            <Step key={index}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Stack>
    </Container>
  );
}
