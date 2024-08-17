"use client";

import React, { useState } from "react";
import Image from "next/image";
import { InputOTP, InputOTPGroup, InputOTPSlot1 } from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";

const OTPVerification = () => {
  const [value, setValue] = useState("");

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

            <div className="grid place-content-center mb-4">
              <InputOTP maxLength={6} value={value} onChange={(value) => setValue(value)}>
                <InputOTPGroup>
                  <InputOTPSlot1 index={0} />
                  <InputOTPSlot1 index={1} />
                  <InputOTPSlot1 index={2} />
                </InputOTPGroup>

                <InputOTPGroup>
                  <InputOTPSlot1 index={3} />
                  <InputOTPSlot1 index={4} />
                  <InputOTPSlot1 index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>

            <Button className="w-full bg-primary text-white">Continue</Button>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;
