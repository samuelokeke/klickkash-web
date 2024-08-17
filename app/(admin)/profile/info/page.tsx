import { Separator } from "@/components/ui/separator";
import React from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      <Breadcrumb className="mb-3">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link href="/profile">Profile</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Info</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <section className="bg-white rounded-lg p-4">
        <ul>
          <li className="flex justify-between items-center gap-2 p-4">
            <p className="flex-auto text-sm">Username</p>
            <p className="text-sm">EhisCruise</p>
          </li>

          <Separator />

          <li className="flex justify-between items-center gap-2 p-4">
            <p className="flex-auto text-sm">Full name</p>
            <p className="text-sm">Ehis Edoghie</p>
          </li>

          <Separator />

          <li className="flex justify-between items-center gap-2 p-4">
            <p className="flex-auto text-sm">Email</p>
            <p className="text-sm">johndoe@gmail.com</p>
          </li>

          <Separator />

          <li className="flex justify-between items-center gap-2 p-4">
            <p className="flex-auto text-sm">Phone number</p>
            <p className="text-sm">09071142338</p>
          </li>

          <Separator />

          <li className="flex justify-between items-center gap-2 p-4">
            <p className="flex-auto text-sm">Joined</p>
            <p className="text-sm">14 May 2024</p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Page;
