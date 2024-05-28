"use client";

import { useState } from "react";

import { DashboardContent } from "../DashboardContent";

import { AppWrapper, Container } from "./styles";
import { Sidebar } from "../Sidebar.components/Sidebar";

export function Dashboard() {
  const [stateSidebar, setStateSidebar] = useState(false);

  function modifyStatesidebar() {
    setStateSidebar(!stateSidebar);
  }

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
