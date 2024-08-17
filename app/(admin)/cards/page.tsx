import React from "react";
import styles from "./page.module.scss";
import { PlusIcon } from "lucide-react";

const Page = () => {
  return (
    <div>
      <section className="flex flex-wrap gap-4">
        <div className={styles.mastercard}>
          <p className="text-lg">5000 0000 0000 0000</p>

          <div className="flex items-center gap-1">
            <p className="text-xxs leading-none uppercase">
              Valid <br /> Thru
            </p>
            <p className="text-lg">00/00</p>
          </div>
        </div>

        <div className="w-1/4 h-44 bg-white rounded-xl grid place-content-center border-2 border-primary border-dashed">
          <div className=" flex flex-col justify-center items-center gap-4">
            <button className="p-2 rounded-full">
              <PlusIcon />
            </button>

            <p className="text-lg text-primary">Add Card</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
