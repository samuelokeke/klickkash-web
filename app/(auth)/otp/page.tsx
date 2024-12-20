import React, { Suspense } from "react";
import Image from "next/image";
import OTPForm from "./form";

const OTPVerification = () => {
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

          <figure className="border rounded-lg px-12 py-40">
            <figcaption className="text-center mb-8">
              <h1 className="text-base font-bold mb-1">Enter OTP</h1>
              <p className="text-sm">An OTP has been sent to your number 0813000****.</p>
            </figcaption>

            <Suspense>
              <OTPForm />
            </Suspense>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;
