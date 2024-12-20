"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import routes from "@/app/routes";
import { LogOut } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion, Variants } from "framer-motion";

type SidePaneProps = {
  logout: () => void;
};

function SidePane({ logout }: SidePaneProps) {
  const pathname = usePathname();

  const variants: Variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <div className="h-full flex flex-col items-center justify-between">
      <Link href="/" className="mb-14">
        <Image src="logo.svg" className="w-16 h-auto" width={0} height={0} priority alt="logo" />
      </Link>

      <nav className="mb-auto">
        <div className="text-center mb-6">
          <h2 className="text-primary">Menu</h2>
        </div>

        <ul className="flex flex-col items-center justify-center gap-4">
          {routes.map((route) => (
            <motion.li variants={variants} key={route.path}>
              <Link href={route.path} className="flex flex-col items-center gap-2">
                <div
                  data-current={pathname === route.path}
                  className="group w-12 h-12 grid place-content-center data-[current=true]:bg-primary hover:bg-primary rounded"
                >
                  {pathname === route.path ? route.activeIcon : route.inactiveIcon}
                </div>

                <p className="text-sm">{route.name}</p>
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>

      <button className="flex flex-col items-center gap-2" onClick={() => logout()}>
        <LogOut className="text-red-500" />

        <p className="text-sm text-red-500">Logout</p>
      </button>
    </div>
  );
}

export default SidePane;
