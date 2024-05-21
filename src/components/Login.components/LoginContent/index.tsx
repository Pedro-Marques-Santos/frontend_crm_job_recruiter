"use client";

import { SelectLanguage } from "@/components/Selectlanguage";
import { Button, Container, Icon, SelectLanguageWidth } from "./styles";

import { FcGoogle } from "react-icons/fc";

export function LoginContent() {
  return (
    <Container>
      <SelectLanguageWidth>
        <SelectLanguage />
      </SelectLanguageWidth>
      <h1>Welcome to</h1>
      <h2>EasyRecruit</h2>
      <h5>
        Log in and join our platform, where we provide the tools for you to find
        your dream job or to post your vacancy for the best collaborators!
      </h5>
      <Button>
        <Icon>
          <FcGoogle size={24} />
        </Icon>
        Login with Google
      </Button>
    </Container>
  );
}
