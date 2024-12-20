"use client";

import React from "react";
import { createTodo } from "./actions";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Compound from "@/components/shared/compound";
import TopProgress from "@/components/shared/TopProgress";

const Page = () => {
  return (
    <div className="min-h-[2000px]">
      <Compound post={{ id: 9 }}>
        <Compound.Title></Compound.Title>
        <Compound.Content></Compound.Content>
        <Compound.Footer></Compound.Footer>
      </Compound>

      <form action={createTodo} className="flex gap-1">
        <input className="px-4 rounded" type="text" name="todo" placeholder="Enter todo" />

        <Button type="submit">Add</Button>

        <motion.button
          whileHover={{
            scale: 1.1,
            transition: { type: "spring", stiffness: 400, damping: 10 },
          }}
          className="px-3 py-1 rounded-sm bg-gray-100 border"
        >
          Get buckets
        </motion.button>
      </form>

      <TopProgress />
    </div>
  );
};

export default Page;
