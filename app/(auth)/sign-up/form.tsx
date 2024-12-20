"use client";

import React, { useState, useTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import { z } from "zod";
import { signUp } from "./actions";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { useGoogleLogin } from "@react-oauth/google";
import FacebookLogin from "@greatsumini/react-facebook-login";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { Checkbox } from "@/components/ui/checkbox";
import { zodResolver } from "@hookform/resolvers/zod";
import { PasswordInput } from "@/components/ui/password-input";
import { emailRegEx, phoneRegEx, pwdRegExp } from "@/lib/constants/regex.constant";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const appId = process.env.FACEBOOK_APP_ID as string;

const formSchema = z
  .object({
    email: z.string().regex(emailRegEx),
    phone_number: z.string().regex(phoneRegEx),
    password: z.string().regex(pwdRegExp, {
      message: "Password strength must be strong.",
    }),
    confirm: z.string().regex(pwdRegExp, {
      message: "Password strength must be strong.",
    }),
    terms: z.boolean({ message: "Terms should be selected" }),
  })
  .refine((value) => value.password === value.confirm, {
    message: "Password does not match",
    path: ["confirm"],
  });

function SignUpForm() {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<{ message: string } | null>(null);
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
    onError: () => console.log("google auth failed"),
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      phone_number: "",
      password: "",
      confirm: "",
      terms: false,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // ✅ This will be type-safe and validated.
    startTransition(async () => {
      const res = await signUp(values);
      setError(res);
      console.log(res);
    });
  }

  return (
    <>
      <div>
        {error && !pending && <p className="text-sm text-red-500 mt-2">{error.message}</p>}

        {pending && (
          <div className="flex items-center gap-1 mt-2">
            <Spinner size="small" /> <p className="text-sm">Loading...</p>
          </div>
        )}
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel className="text-xs">Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter email address" {...field} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone_number"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel className="text-xs">Phone number</FormLabel>
                <FormControl>
                  <Input placeholder="Enter phone number" {...field} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel className="text-xs">Password</FormLabel>
                <FormControl>
                  <PasswordInput type="password" placeholder="Enter password" {...field} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirm"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel className="text-xs">Confirm password</FormLabel>
                <FormControl>
                  <PasswordInput type="password" placeholder="Re-enter password" {...field} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex items-center space-x-2 mb-8">
            <Controller
              name="terms"
              control={form.control}
              render={({ field: { onChange, value } }) => (
                <Checkbox
                  id="terms"
                  className="rounded-xs"
                  onCheckedChange={(checked) => onChange(checked)}
                  checked={value}
                />
              )}
            />

            <label
              htmlFor="terms"
              className="text-xs text-muted-foreground font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I agree to the{" "}
              <Link className="text-primary" href="">
                Terms & Conditions
              </Link>{" "}
              of Klickkash
            </label>
          </div>

          <div className="flex justify-center mb-6">
            <Button type="submit" className="md:w-96 w-full text-sm" disabled={pending}>
              {pending ? "Submitting..." : "Sign up"}
            </Button>
          </div>

          <p className="text-sm text-muted-foreground font-medium text-center leading-none mb-6">
            Already have a Klickkash account?{" "}
            <Link className="text-primary" href="login">
              Login
            </Link>
          </p>
        </form>

        <div className="flex items-center gap-2 mb-8">
          <hr className="w-full border-t" />
          <p className="text-sm text-gray-400">OR</p>
          <hr className="w-full border-t" />
        </div>

        <div className="flex items-center gap-4">
          <Button
            onClick={() => login()}
            className="flex-auto flex items-center gap-2 bg-muted text-foreground hover:bg-muted"
          >
            <Image src="/assets/icons/google.svg" className="w-5 h-auto" width={0} height={0} alt="google-icon" />

            <p className="text-sm">Sign up with Google</p>
          </Button>

          <FacebookLogin
            appId={appId}
            onSuccess={(response) => {
              console.log("Login Success!", response);
            }}
            onFail={(error) => {
              console.log("Login Failed!", error);
            }}
            onProfileSuccess={(response) => {
              console.log("Get Profile Success!", response);
            }}
            render={({ onClick, logout }) => (
              <Button
                onClick={onClick}
                disabled={pending}
                className="flex-auto flex items-center gap-2 bg-muted text-foreground hover:bg-muted"
              >
                <Image
                  src="/assets/icons/facebook.svg"
                  className="w-5 h-auto"
                  width={0}
                  height={0}
                  alt="facebook-icon"
                />

                <p className="text-sm">Sign up with Facebook</p>
              </Button>
            )}
          />
        </div>
      </Form>
    </>
  );
}

export default SignUpForm;
