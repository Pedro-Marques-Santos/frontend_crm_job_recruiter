import React from "react";
import { Container } from "./styles";
import { Statistics } from "../Statistics";
import { SelectStatistcs } from "../SelectStatistcs";

export function Chart() {
  return (
    <Container>
      <SelectStatistcs />
      <Statistics />
    </Container>
  );
}
