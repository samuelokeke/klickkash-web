"use server";

import { redirect } from "next/navigation";

export async function resetPassword(values: { password: string; confirm_password: string; hash_key: string }) {
  const payload = {
    new_password: values.password,
    confirm_password: values.confirm_password,
  };

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/reset-password`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "hash-id-key": values.hash_key,
      },
      body: JSON.stringify(payload),
    });

    console.log(response, "response");

    const data = await response.json();

    if (response.status !== 200 && !response.ok) {
      throw new Error(data.message);
    }
  } catch (error: any) {
    return { error: "", message: error.message, code: 400, status: 400 };
  }

  redirect("/login");
}
