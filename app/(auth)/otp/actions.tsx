"use server";

import { redirect } from "next/navigation";

export async function verifyToken(values: any) {
  const payload = {
    email: values.email,
    token: values.token,
  };

  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/verify-otp`, {
    method: "PATCH", // POST
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  console.log(data, "vdata");

  if (response.status === 200 && response.ok) {
    redirect("/login");
  } else {
    return data;
  }
}
