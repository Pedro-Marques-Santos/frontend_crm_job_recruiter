"use client";

import img from "@/images/login-img.svg";
import imgLogo from "@/images/logoeasyrecruiter.png";

import Image from "next/image";
import { Container, ImgResolutionBig, ImgResolutionSmall } from "./styles";

export function LoginImg() {
  return (
    <Container>
      <ImgResolutionBig>
        <Image src={img} width={500} height={500} alt="Picture of the author" />
      </ImgResolutionBig>
      <ImgResolutionSmall>
        <Image
          src={imgLogo}
          width={175.32}
          height={39.86}
          alt="Picture of the author"
        />
      </ImgResolutionSmall>
    </Container>
  );
}
