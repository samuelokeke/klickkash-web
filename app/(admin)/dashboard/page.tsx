import React from "react";

import Image from "next/image";
import WalletCard from "./components/WalletCard";
import TransactionList from "./components/TransactionList";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <section className="bg-white flex rounded-lg overflow-hidden">
        <div className="w-1/3 py-10 px-5 border-r">
          <WalletCard />
        </div>

        <div className="w-2/3 py-10 px-5">
          <ul className="flex items-center justify-evenly gap-6 border h-full">
            <li className="flex flex-col justify-center items-center gap-3">
              <div className="w-11 h-11 bg-muted rounded-full grid place-content-center">
                <Image src="assets/icons/send-2.svg" width={24} height={24} alt="transfer" />
              </div>

              <p className="text-sm">Transfer</p>
            </li>

            <li className="flex flex-col justify-center items-center gap-3">
              <div className="w-11 h-11 bg-success-50 rounded-full grid place-content-center">
                <Image src="assets/icons/airtime.svg" width={24} height={24} alt="airtime" />
              </div>

              <p className="text-sm">Airtime</p>
            </li>

            <li className="flex flex-col justify-center items-center gap-3">
              <div className="w-11 h-11 bg-[#EEE6E9] rounded-full grid place-content-center">
                <Image src="assets/icons/receipt-item.svg" width={24} height={24} alt="internet" />
              </div>

              <p className="text-sm">Internet</p>
            </li>

            <li className="flex flex-col justify-center items-center gap-3">
              <div className="w-11 h-11 bg-[#E9EEE6] rounded-full grid place-content-center">
                <Image src="assets/icons/electricity.svg" width={24} height={24} alt="electricity" />
              </div>

              <p className="text-sm">Electricity</p>
            </li>

            <li className="flex flex-col justify-center items-center gap-3">
              <div className="w-11 h-11 bg-[#FFFBE6] rounded-full grid place-content-center">
                <Image src="assets/icons/tv.svg" width={24} height={24} alt="tv" />
              </div>

              <p className="text-sm">TV</p>
            </li>
          </ul>
        </div>
      </section>

      <section className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-9 bg-white rounded-lg py-10">
          <div className="px-6 mb-6">
            <h2 className="text-lg font-normal">Recent Transactions</h2>
          </div>

          <TransactionList />
        </div>

        <div className="col-span-12 md:col-span-3 bg-white rounded-lg py-4 px-4">
          <h4 className="text-sm font-medium mb-6">You might like</h4>

          <div className="space-y-6">
            <div>
              <Image src="/assets/images/product-1.png" className="w-full" width={261} height={261} alt="product" />
            </div>

            <div>
              <Image src="/assets/images/product-2.png" className="w-full" width={261} height={261} alt="product" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
