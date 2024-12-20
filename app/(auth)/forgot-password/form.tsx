"use client";

import React, { useTransition, useState } from "react";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { forgotPassword, verifyForgotPasswordOTP } from "./actions";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { HttpResponse } from "@/lib/types/response.type";
import { InputOTP, InputOTPGroup, InputOTPSlot1 } from "@/components/ui/input-otp";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

function ForgotPasswordForm() {
  const { toast } = useToast();
  const [pending, startTransition] = useTransition();
  const [result, setResult] = useState<HttpResponse | null>(null);

  const emailSchema = z.object({
    email: z.string().email("Email is invalid"),
    otp: z.string().optional(),
  });

  const otpRequiredSchema = emailSchema.extend({
    otp: z.string(emailSchema.shape.otp),
  });

  const formSchema = result?.status === 200 ? otpRequiredSchema : emailSchema;

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      otp: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // ✅ This will be type-safe and validated.

    startTransition(async () => {
      if (values.otp) {
        const result = await verifyForgotPasswordOTP({
          email: values.email,
          otp: values.otp,
        });
      } else {
        const result = await forgotPassword({
          email: values.email,
        });

        if (!result?.error) {
          setResult(result);
        } else {
          toast({ title: result.error?.message });
        }
      }
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="mb-6">
              <FormLabel className="text-xs">Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter email address" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {result?.status && (
          <div className="grid place-content-center">
            <Controller
              name="otp"
              control={form.control}
              render={({ field }) => (
                <InputOTP value={field.value} maxLength={5} onChange={(value) => field.onChange(value)}>
                  <InputOTPGroup>
                    <InputOTPSlot1 index={0} />
                    <InputOTPSlot1 index={1} />
                    <InputOTPSlot1 index={2} />
                  </InputOTPGroup>

                  <InputOTPGroup>
                    <InputOTPSlot1 index={3} />
                    <InputOTPSlot1 index={4} />
                    {/* <InputOTPSlot1 index={5} /> */}
                  </InputOTPGroup>
                </InputOTP>
              )}
            />
          </div>
        )}

        <div className="flex justify-center mb-8 mt-8">
          <Button type="submit" className="w-96 text-sm" disabled={pending}>
            {pending ? "Processing..." : "Proceed"}
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default ForgotPasswordForm;
