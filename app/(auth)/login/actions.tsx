"use server";

import { createSession } from "@/app/actions/auth";
import { redirect } from "next/navigation";

type LoginProps = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export async function login(values: LoginProps) {
  const payload = { email: values.email, password: values.password };

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (response.ok && data.status === "success") {
      const token = data?.data?.token;

      if (token) {
        createSession(token);
      }
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    if (error instanceof Error) {
      return { message: error.message };
    }
  }

  redirect("/dashboard");
}
