import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import getAuth from "@/app/actions/auth";

const Page = async () => {
  const { user } = await getAuth();

  return (
    <div>
      <Breadcrumb className="mb-3">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/profile">Profile</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Info</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <section className="bg-background rounded-lg p-4">
        <ul>
          <li className="flex justify-between items-center gap-2 p-4">
            <p className="flex-auto text-sm">Username</p>
            <p className="text-sm">EhisCruise</p>
          </li>

          <Separator />

          <li className="flex justify-between items-center gap-2 p-4">
            <p className="flex-auto text-sm">Full name</p>
            <p className="text-sm">
              {user?.first_name} {user?.last_name}
            </p>
          </li>

          <Separator />

          <li className="flex justify-between items-center gap-2 p-4">
            <p className="flex-auto text-sm">Email</p>
            <p className="text-sm">{user?.email ?? "—"}</p>
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
