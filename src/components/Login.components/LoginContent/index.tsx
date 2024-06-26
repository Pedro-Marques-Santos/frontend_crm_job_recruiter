"use client";

import { SelectLanguage } from "@/components/Selectlanguage";
import { Button, Container, Icon, SelectLanguageWidth } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { FcGoogle } from "react-icons/fc";
import { signInWithGooglePopup } from "@/utils";
import { setToken } from "@/store/slices/auth";
import { useRouter } from "next/navigation";
import { useLoginUserMutation } from "@/store/slices/user";

export function LoginContent() {
  const [loginUser] = useLoginUserMutation();
  const dispatch = useDispatch();
  const router = useRouter();

  async function loginWithGoogle() {
    try {
      const result = await signInWithGooglePopup();
      const token = await result.user.getIdToken();
      if (token) {
        await fetchAuthenticationGoogle(token);
      }
    } catch (e) {
      console.log("Error during Google sign-in:", e);
    }
  }

  async function fetchAuthenticationGoogle(token: string) {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DB_HOST}googleAuthentication`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      // console.log(response);

      if (result.status === "noRegister") {
        router.push(`/register/${token}`);
      } else {
        dispatch(setToken(token));
        localStorage.setItem("token", token);
        // await loginUser();
        router.push(`/`);
      }
    } catch (e) {
      console.log("Error during fetch:", e);
    }
  }

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
      <Button onClick={loginWithGoogle}>
        <Icon>
          <FcGoogle size={24} />
        </Icon>
        Login with Google
      </Button>
    </Container>
  );
}
