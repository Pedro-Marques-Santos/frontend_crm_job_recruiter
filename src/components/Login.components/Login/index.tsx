"use client";

import { store } from "@/store";
import { Provider as ReduxProvider } from "react-redux";
import { LoginContent } from "../LoginContent";
import { LoginImg } from "../LoginImg";
import { Container, ContentContainer } from "./styles";

export function Login() {
  return (
    <ReduxProvider store={store}>
      <Container>
        <ContentContainer>
          <LoginImg />
          <LoginContent />
        </ContentContainer>
      </Container>
    </ReduxProvider>
  );
}
