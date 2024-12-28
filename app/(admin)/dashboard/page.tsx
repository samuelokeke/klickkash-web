import React from "react";

import Image from "next/image";
import WalletCard from "./components/WalletCard";
import TransactionList from "./components/TransactionList";
import Utilities from "./components/Utilities";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <section className="bg-background flex md:flex-row flex-col rounded-lg">
        <div className="md:w-1/3 py-10 px-5 md:border-r">
          <WalletCard />
        </div>

        <div className="md:w-2/3 py-10 px-5 overscroll-x-auto border overflow-hidden">
          <Utilities />
        </div>
      </section>

      <section className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-9 bg-background rounded-lg py-10">
          <div className="flex justify-between px-6 mb-6">
            <h2 className="text-lg font-normal">Recent Transactions</h2>

            <Button variant="secondary">See more</Button>
          </div>

          <TransactionList />
        </div>

        <div className="col-span-12 md:col-span-3 bg-background rounded-lg py-5 px-4">
          <h4 className="text-sm uppercase font-semibold mb-6">You might like</h4>

          <div className="space-y-6">
            <div>
              <Image
                loading="lazy"
                src="/assets/images/product-1.png"
                className="w-full h-auto"
                width={261}
                height={261}
                alt="product 1"
              />
            </div>

            <div>
              <Image
                loading="lazy"
                src="/assets/images/product-2.png"
                className="w-full h-auto"
                width={261}
                height={261}
                alt="product 2"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
