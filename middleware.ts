import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
  // 1. Decrypt the session from the cookie
  const token = (await cookies()).get("token")?.value;

  // 2. Redirect to /login if the user is not authenticated
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  // 3. Redirect to /dashboard if the user is authenticated
  if (token && req.nextUrl.pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/cards/:path*", "/profile/:path*", "/transactions/:path*"],
};
