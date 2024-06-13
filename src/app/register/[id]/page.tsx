"use client";

import { Register } from "@/components/Register.components/Register";
import { redirect } from "next/navigation";

export default function Home({ params }: { params: { id: string } }) {
  const idtoken = params.id;

  if (!idtoken) {
    redirect(`/login`);
  }

  return <Register idtoken={idtoken} />;
}
