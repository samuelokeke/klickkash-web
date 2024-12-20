"use client";

import React, { useTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import { z } from "zod";
import { login } from "./actions";
import { useToast } from "@/hooks/use-toast";
import { Controller, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { zodResolver } from "@hookform/resolvers/zod";
import { PasswordInput } from "@/components/ui/password-input";
import { pwdRegExp } from "@/lib/constants/regex.constant";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().regex(pwdRegExp, {
    message: "Password strength must be strong.",
  }),
  rememberMe: z.boolean({ message: "Terms should be selected" }),
});

function LoginForm() {
  const { toast } = useToast();
  const [pending, startTransition] = useTransition();

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // ✅ This will be type-safe and validated.
    startTransition(async () => {
      const result = await login(values);

      if (result) {
        toast({ title: result?.message });
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

        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-2">
            <Controller
              name="rememberMe"
              control={form.control}
              render={({ field: { onChange, value } }) => (
                <Checkbox
                  id="rememberMe"
                  className="rounded-xs"
                  onCheckedChange={(checked) => onChange(checked)}
                  checked={value}
                />
              )}
            />

            <label
              htmlFor="rememberMe"
              className="text-xs text-muted-foreground font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Keep me signed in
            </label>
          </div>

          <Link className="text-xs text-primary" href="forgot-password">
            Forgot Password?
          </Link>
        </div>

        <div className="flex justify-center mb-8">
          <Button type="submit" className="w-96 text-sm" disabled={pending}>
            {pending ? "Processing..." : "Login"}
          </Button>
        </div>

        <p className="text-sm text-muted-foreground font-medium text-center leading-none mb-8">
          New to Klickkash?{" "}
          <Link className="text-primary" href="sign-up">
            Create an account
          </Link>
        </p>
      </form>

      <div className="flex items-center gap-2 mb-8">
        <hr className="w-full border-t" />
        <p className="text-sm text-gray-400">OR</p>
        <hr className="w-full border-t" />
      </div>

      <div className="flex items-center gap-4">
        <Button className="flex-auto flex items-center gap-2 bg-muted text-foreground hover:bg-muted">
          <Image src="/assets/icons/google.svg" className="w-4 h-auto" width={0} height={0} alt="google-icon" />

          <p className="text-xs">Sign in with Google</p>
        </Button>

        <Button className="flex-auto flex items-center gap-2 bg-muted text-foreground hover:bg-muted">
          <Image src="/assets/icons/facebook.svg" className="w-4 h-auto" width={0} height={0} alt="facebook-icon" />

          <p className="text-xs">Sign in with Facebook</p>
        </Button>
      </div>
    </Form>
  );
}

export default LoginForm;
