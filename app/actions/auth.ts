"use server";

import { decodeJwt } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { User } from "@/lib/types/user.type";

export default async function getAuth() {
  let user;
  const token = await cookies().get("token")?.value;

  if (token) {
    user = decodeJwt(token as string) as User;
  }

  return { user } as { user: User };
}

export async function createSession(token: string) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  (await cookies()).set("token", token, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
}

export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete("token");
}

export async function logout() {
  deleteSession();
  redirect("/login");
}
