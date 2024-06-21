"use client";

import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/store";

import { Dashboard } from ".";

export function DashboardRedux() {
  return (
    <ReduxProvider store={store}>
      <Dashboard />
    </ReduxProvider>
  );
}
