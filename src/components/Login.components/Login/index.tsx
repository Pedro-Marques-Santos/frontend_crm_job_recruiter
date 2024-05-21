"use client";

import { LoginContent } from "../LoginContent";
import { LoginImg } from "../LoginImg";
import { Container, ContentContainer } from "./styles";

export function Login() {
  return (
    <Container>
      <ContentContainer>
        <LoginImg />
        <LoginContent />
      </ContentContainer>
    </Container>
  );
}
