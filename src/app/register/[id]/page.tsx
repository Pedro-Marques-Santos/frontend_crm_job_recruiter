"use client";

import { Register } from "@/components/Register.components/Register";
import { redirect } from "next/navigation";

export default function Home({ params }: { params: { id: string } }) {
  const id = params.id;

  if (!id || id.length < 1190) {
    console.log(id.length);
    redirect(`/login`);
  }

  return <Register />;
}
