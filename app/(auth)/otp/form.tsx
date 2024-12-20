"use client";

import React, { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import { InputOTP, InputOTPGroup, InputOTPSlot1 } from "@/components/ui/input-otp";
import { verifyToken } from "./actions";
import { HttpResponse } from "@/lib/types/response.type";

type OTPFormProps = {};

function OTPForm({}: OTPFormProps) {
  const searchParams = useSearchParams();
  const [pending, startTransition] = useTransition();
  const [value, setValue] = useState("");
  const [error, setError] = useState<HttpResponse | null>(null);

  const submitToken = async () => {
    startTransition(async () => {
      const email = searchParams.get("email");

      const result = await verifyToken({ email: email, token: value });

      setError(result);
    });
  };

  return (
    <>
      {error && <div className="flex justify-center p-4">{error?.message}</div>}

      <div className="grid place-content-center mb-4">
        <InputOTP maxLength={5} value={value} onChange={(value) => setValue(value)}>
          <InputOTPGroup>
            <InputOTPSlot1 index={0} />
            <InputOTPSlot1 index={1} />
            <InputOTPSlot1 index={2} />
            <InputOTPSlot1 index={3} />
            <InputOTPSlot1 index={4} />
          </InputOTPGroup>
        </InputOTP>
      </div>

      <Button className="w-full bg-primary text-white" onClick={submitToken} disabled={value?.length !== 5 || pending}>
        Continue
      </Button>
    </>
  );
}

export default OTPForm;
