"use client";

import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { EyeIcon, EyeOffIcon, Plus } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const formSchema = z.object({
  amount: z
    .string()
    .min(1, "Amount is required")
    .regex(/^\d+(\.\d{1,2})?$/, "Amount must be a valid number with up to two decimal places")
    .transform((value) => parseFloat(value)) // Convert string to a number
    .refine((value) => value > 0, {
      message: "Amount must be greater than zero",
    }),
  cardNumber: z
    .string()
    .min(1, "Account number is required")
    .length(10, "Account number must be exactly 10 digits")
    .regex(/^\d+$/, "Account number must contain only digits"),
  cvv: z.string().regex(/[0-9]{3}/, {
    message: "CVV must be length of 3.",
  }),
  exp: z.string().date("Exp is not a valid date"),
});

const WalletCard = () => {
  const [showBalance, setShowBalance] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: 0,
      cardNumber: "",
      cvv: "",
      exp: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);

    setIsOpen(false);
  }

  return (
    <div className="md:h-60x h-48x rounded-md bg-gradient-to-br from-primary/90 from-50% to-primary to-50% flex items-center justify-between py-8 px-6">
      <div className="flex flex-col justify-between self-stretch gap-y-4">
        <h3 className="text-white">My Wallet Balance</h3>

        <p className="text-3xl font-bold text-white">{showBalance ? "₦100,000.00" : "********"}</p>

        <Sheet open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
          <SheetTrigger asChild>
            <Button
              onClick={() => setIsOpen(true)}
              className="bg-white w-fit gap-0.5 text-primary hover:bg-white hover:text-primary"
            >
              <Plus /> Add fund
            </Button>
          </SheetTrigger>

          <SheetContent aria-describedby="sheet">
            <SheetHeader>
              <SheetTitle>Add fund</SheetTitle>
              <SheetDescription></SheetDescription>
            </SheetHeader>

            <Form {...form}>
              <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4 py-4">
                <FormField
                  control={form.control}
                  name="amount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Amount</FormLabel>
                      <FormControl>
                        <Input placeholder="Amount" {...field} />
                      </FormControl>
                      <FormDescription>Enter amount to deposit</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="my-2">
                  <p className="text-base font-medium">Enter Card Details</p>
                </div>

                <FormField
                  control={form.control}
                  name="cardNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Card Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Card number" {...field} />
                      </FormControl>
                      <FormDescription>This is your card number.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="cvv"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>CVV</FormLabel>
                        <FormControl>
                          <Input placeholder="CVV" {...field} />
                        </FormControl>
                        <FormDescription>At the back of your card</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="exp"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Exp</FormLabel>
                        <FormControl>
                          <Input placeholder="Exp" {...field} />
                        </FormControl>
                        <FormDescription>Card expiry date</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </form>
            </Form>

            <SheetFooter className="sm:justify-between">
              <Button type="submit" variant="outline" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>

              <Button type="submit" onClick={() => formRef.current?.requestSubmit()}>
                Save changes
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      <Button
        className="w-12 h-12 bg-muted-foreground/50 hover:bg-muted-foreground rounded-full grid place-content-center"
        onClick={() => setShowBalance(!showBalance)}
      >
        {showBalance ? <EyeIcon className="text-white" /> : <EyeOffIcon className="text-white" />}
      </Button>
    </div>
  );
};

export default WalletCard;
