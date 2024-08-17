"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { zodResolver } from "@hookform/resolvers/zod";
import { PasswordInput } from "@/components/ui/password-input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { emailRegEx, phoneRegEx, pwdRegExp } from "@/lib/constants/regex.constant";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const formSchema = z
  .object({
    email: z
      .string()
      .optional()
      .transform((e) => (e === "" ? undefined : e)),
    phone: z
      .string()
      .optional()
      .transform((e) => (e === "" ? undefined : e)),
    password: z.string().regex(pwdRegExp, {
      message: "Password strength must be strong.",
    }),
    confirm: z.string().regex(pwdRegExp, {
      message: "Password strength must be strong.",
    }),
  })
  .refine((value) => value.password === value.confirm, {
    message: "Password does not match",
    path: ["confirm"],
  })
  .superRefine((value, ctx) => {
    if (!value.phone && !value.email) {
      ctx.addIssue({
        message: "At least one of phone or email is required",
        code: z.ZodIssueCode.invalid_string,
        validation: "regex",
        path: ["phone"],
      });
      ctx.addIssue({
        message: "At least one of phone or email is required",
        code: z.ZodIssueCode.invalid_string,
        validation: "email",
        path: ["email"],
      });

      return true;
    }

    if (!value.email && !value.phone?.match(phoneRegEx)) {
      ctx.addIssue({
        message: "Phone must be valid",
        code: z.ZodIssueCode.invalid_string,
        validation: "regex",
        path: ["phone"],
      });
    }

    if (!value.phone && !value.email?.match(emailRegEx)) {
      ctx.addIssue({
        message: "Email must be valid",
        code: z.ZodIssueCode.invalid_string,
        validation: "email",
        path: ["email"],
      });
    }
  });

const tabsTriggers = ["phone", "email"];

const SignUp = () => {
  const [tabValue, setTabValue] = useState<"phone" | "email">("phone");

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      phone: "",
      password: "",
      confirm: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  console.log(form.formState.errors);

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
              <h1 className="text-base font-bold mb-1">Create an account with us today</h1>
              <p className="text-sm">Let’s get you all started</p>
            </figcaption>

            <Tabs defaultValue="phone">
              <TabsList className="w-full grid grid-cols-2">
                <TabsTrigger value="phone" onClick={() => setTabValue("phone")}>
                  Phone number
                </TabsTrigger>
                <TabsTrigger value="email" onClick={() => setTabValue("email")}>
                  Email
                </TabsTrigger>
              </TabsList>

              {tabsTriggers.map((trigger) => (
                <TabsContent key={trigger} className="py-4" value={trigger}>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                      {tabValue === "email" && (
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
                      )}

                      {tabValue === "phone" && (
                        <FormField
                          control={form.control}
                          name="phone"
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
                      )}

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
                        <Checkbox id="terms" className="w-3 h-3 rounded-xs" />
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
                        <Button type="submit" className="w-96 text-sm">
                          Sign up
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
                      <Button className="flex-auto flex items-center gap-2 bg-muted text-foreground hover:bg-muted">
                        <Image src="/assets/icons/google.svg" width={16} height={16} alt="google-icon" />
                        <p className="text-xxs">Sign up with Google</p>
                      </Button>

                      <Button className="flex-auto flex items-center gap-2 bg-muted text-foreground hover:bg-muted">
                        <Image src="/assets/icons/facebook.svg" width={16} height={16} alt="facebook-icon" />
                        <p className="text-xxs">Sign up with Facebook</p>
                      </Button>
                    </div>
                  </Form>
                </TabsContent>
              ))}
            </Tabs>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
