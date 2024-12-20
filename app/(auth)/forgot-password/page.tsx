import React from "react";
import Image from "next/image";
import ForgotPasswordForm from "./form";

const ForgotPassword = () => {
  return (
    <div className="container">
      <div className="flex flex-col md:flex-row gap-7 my-11">
        <div className="w-full md:w-3/5">
          <Image src="/assets/signup-bg.png" width={780} height={930} className="w-full" priority alt="sign-up" />
        </div>

        <div className="w-full md:w-2/5">
          <div className="flex justify-center mb-6">
            <Image className="w-60 h-14" src="/logo-lg.svg" width={380} height={54} alt="logo" />
          </div>

          <figure className="border rounded-lg px-6 py-8">
            <figcaption className="text-center mb-8">
              <h1 className="text-base font-bold mb-1">Forgot Password</h1>
              <p className="text-sm">Let&apos;s help you get your password back</p>
            </figcaption>

            <ForgotPasswordForm />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
