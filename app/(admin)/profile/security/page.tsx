import { Separator } from "@/components/ui/separator";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
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
            <BreadcrumbPage>Security</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <section className="bg-white rounded-lg p-4">
        <ul>
          <li className="flex justify-between items-center gap-2 p-4">
            <div className="w-8 h-8 bg-[#FFFBE6] rounded-full grid place-content-center">
              <Image src="/assets/icons/lock.svg" width={24} height={24} alt="passcode" />
            </div>

            <p className="flex-auto text-sm">Change Passcode</p>

            <ChevronRight />
          </li>

          <Separator />

          <li className="flex justify-between items-center gap-2 p-4">
            <div className="w-8 h-8 bg-success-50 rounded-full grid place-content-center">
              <Image src="/assets/icons/lock.svg" width={24} height={24} alt="password-lock" />
            </div>

            <p className="flex-auto text-sm">Change Password</p>

            <ChevronRight />
          </li>

          <Separator />
        </ul>
      </section>
    </div>
  );
};

export default Page;
