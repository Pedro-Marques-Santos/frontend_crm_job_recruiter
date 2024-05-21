import { Container } from "./styles";

import img from "@/images/finishformregister.svg";

import Image from "next/image";

export function FormRegisterContentStepFour() {
  return (
    <Container>
      <Image src={img} alt={""} />
      <h1>Submit your form and be part of our community</h1>
      <h3>
        Review all the information you previously entered in the previous steps,
        and confirm your registration
      </h3>
    </Container>
  );
}
