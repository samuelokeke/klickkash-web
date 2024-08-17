import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auth",
  description: "Get started",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
