"use client";

import { Container } from "./styles";

import img from "@/images/Interview-rafiki 1.svg";

import Image from "next/image";

export function RegisterImg() {
  return (
    <Container>
      <Image
        src={img}
        alt="Picture of the author"
        style={{ width: "100%", maxHeight: "398px" }}
        priority
      />
    </Container>
  );
}
