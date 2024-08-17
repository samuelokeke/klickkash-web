"use client";

import Link from "next/link";
import Image from "next/image";
import routes from "@/app/routes";
import { usePathname } from "next/navigation";
import AppBar from "@/components/shared/appbar";
import { LogOut } from "lucide-react";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <div className="bg-[#edf2f9] flex gap-4">
      <aside className="fixed h-screen w-28 bg-white p-3">
        <div className="flex flex-col items-center justify-center">
          <Link href="/" className="mb-14">
            <Image src="logo.svg" width={64} height={64} alt="logo" />
          </Link>

          <nav>
            <div className="text-center mb-6">
              <h2 className="text-primary">Menu</h2>
            </div>

            <ul className="flex flex-col items-center justify-center gap-4 mb-40x">
              {routes.map((route) => (
                <li key={route.path}>
                  <Link href={route.path} className="flex flex-col items-center gap-2">
                    <div
                      data-current={pathname === route.path}
                      className="group w-12 h-12 grid place-content-center data-[current=true]:bg-primary hover:bg-primary rounded"
                    >
                      {pathname === route.path ? route.activeIcon : route.inactiveIcon}
                    </div>

                    <p className="text-sm">{route.name}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="absolute bottom-14">
            <Link className="flex flex-col items-center gap-2" href="#">
              <LogOut className="text-red-500" />

              <p className="text-sm text-red-500">Logout</p>
            </Link>
          </div>
        </div>
      </aside>

      <div className="w-[calc(100%-7rem)] min-h-screen ml-28">
        <AppBar />

        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}
