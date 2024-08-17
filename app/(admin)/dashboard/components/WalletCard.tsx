"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { EyeIcon, EyeOffIcon, Plus } from "lucide-react";

const WalletCard = () => {
  const [showBalance, setShowBalance] = useState(false);

  return (
    <div className="h-60 rounded-md bg-gradient-to-br from-primary/90 from-50% to-primary to-50% flex items-center justify-between py-8 px-6">
      <div className="flex flex-col justify-between self-stretch">
        <h3 className="text-white">My Wallet Balance</h3>

        <p className="text-3xl font-bold text-white">{showBalance ? "₦100,000.00" : "********"}</p>

        <Button className="bg-white w-fit text-primary hover:bg-white hover:text-primary">
          <Plus /> Add fund
        </Button>
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
