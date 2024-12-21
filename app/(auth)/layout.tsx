import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Auth",
  description: "Get started",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container">
      <div className="flex flex-col md:flex-row items-center gap-7 my-11">
        <div className="w-full md:w-3/5">
          <Image src="/assets/signup-bg.png" width={780} height={930} className="w-full" priority alt="otp" />
        </div>

        <div className="w-full md:w-2/5">
          <div className="flex justify-center mb-6">
            <Image className="w-60 h-14" src="/logo-lg.svg" width={380} height={54} alt="logo" />
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}
