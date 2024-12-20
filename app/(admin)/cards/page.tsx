import React from "react";
import styles from "./page.module.scss";
import { PlusIcon } from "lucide-react";
import AddCardSheet from "./AddCard";

const Page = () => {
  return (
    <div>
      <section className="flex flex-wrap gap-4 px-1">
        <div className={styles.mastercard}>
          <p className="card_number">5000 0000 0000 0000</p>

          <div className="flex items-center gap-1">
            <p className="text-[0.5rem] leading-none uppercase">
              Valid <br /> Thru
            </p>

            <p className="text-base font-medium">00/00</p>
          </div>
        </div>

        <div className="w-1/4 h-44 bg-background rounded-xl grid place-content-center outline-2 outline-primary outline-offset-2 outline-dashed">
          <div className=" flex flex-col justify-center items-center gap-4">
            <button className="p-2 rounded-full">
              <PlusIcon />
            </button>

            <AddCardSheet />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
