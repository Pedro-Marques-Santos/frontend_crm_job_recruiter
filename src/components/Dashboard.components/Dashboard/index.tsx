"use client";

import { useEffect, useState } from "react";

import { DashboardContent } from "../DashboardContent";
import { redirect } from "next/navigation";

import { AppWrapper, Container } from "./styles";
import { Sidebar } from "../Sidebar.components/Sidebar";

import { setToken } from "@/store/slices/auth";
import { useAppDispatch, useAppSelector } from "@/store";
import { useLoginUserMutation, setUser } from "@/store/slices/user";

export function Dashboard() {
  const [loginUser, { data: user, isLoading, data, error }] =
    useLoginUserMutation();
  const tokenFromRedux = useAppSelector((state) => state.auth.token);
  const dispatch = useAppDispatch();

  const [stateSidebar, setStateSidebar] = useState(false);

  function modifyStatesidebar() {
    setStateSidebar(!stateSidebar);
  }

  useEffect(() => {
    const token = localStorage.getItem("token");

    const execute = async () => {
      if (token) {
        dispatch(setToken(token));
        const result = await loginUser();
        if (result.data) {
          dispatch(setUser(result.data));
        }
      }
    };

    execute();

    if (!token && !tokenFromRedux) {
      redirect("/login");
    }

    if (error) {
      redirect("/login");
    }
  }, [dispatch, error, loginUser, tokenFromRedux]);

  return (
    <AppWrapper>
      <Container>
        <Sidebar stateSidebar={stateSidebar} />
        <DashboardContent
          stateSidebar={stateSidebar}
          modifyStatesidebar={modifyStatesidebar}
        />
      </Container>
    </AppWrapper>
  );
}
