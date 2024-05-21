import { styled as StyledMui } from "@mui/material/styles";
import styled from "styled-components";

import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";

export const Container = styled.div``;

export const TitleRegisterForm = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

export const ColorlibConnectorFormRegister = StyledMui(StepConnector)(
  ({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage:
          "linear-gradient( 95deg,#6358DC 0%,#6358DC 50%,#6358DC 100%)",
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage:
          "linear-gradient( 95deg,#6358DC 0%,#6358DC 50%,#6358DC 100%)",
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      height: 4,
      border: 0,
      backgroundColor:
        theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
      borderRadius: 1,
    },
  })
);

export const ColorlibStepIconRootFormRegister = StyledMui("div")<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundImage:
      "linear-gradient( 136deg, #6358DC 0%, #6358DC 50%, #6358DC 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundImage:
      "linear-gradient( 136deg, #6358DC 0%, #6358DC 50%, #6358DC 100%)",
  }),
}));
