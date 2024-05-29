import { Button, Container } from "./styles";

import Image from "next/image";

import img from "@/images/test/img.jpg";

export function Imgprofile() {
  return (
    <Container>
      <Image
        src={img}
        style={{
          width: "100%",
          height: "auto",
        }}
        alt="Picture of the author"
      />
      <Button>Change Image</Button>
    </Container>
  );
}
