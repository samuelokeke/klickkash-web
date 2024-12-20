"use server";

import { redirect } from "next/navigation";

export async function forgotPassword(values: { email: string }) {
  const payload = { email: values.email };

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/forgot-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    if (error instanceof Error) {
      return { error: true, message: error.message };
    }
  }
}

export async function verifyForgotPasswordOTP(values: { email: string; otp: string }) {
  const payload = { email: values.email, token: values.otp };

  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/verify-otp`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  const hashKey = response.headers.get("hash-id-key");

  const params = new URLSearchParams({ hash_key: hashKey! });

  if (response.status === 200 && response.ok) {
    redirect(`/reset-password?${params.toString()}`);
  } else {
    return data;
  }
}
