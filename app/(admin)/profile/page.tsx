import React from "react";
import Link from "next/link";
import Image from "next/image";
import getAuth from "@/app/actions/auth";
import { ChevronRight } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Page = async () => {
  const { user } = await getAuth();

  return (
    <div className="space-y-6">
      <section className="bg-background flex items-center gap-4 rounded-lg p-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>
            {user?.first_name?.[0]}
            {user?.last_name?.[0]}
          </AvatarFallback>
        </Avatar>

        <div>
          <p className="text-sm">
            {user?.first_name} {user?.last_name}
          </p>
          <p className="text-xs text-muted-foreground">{user?.email}</p>
        </div>
      </section>

      <section className="bg-background rounded-lg p-4">
        <ul>
          <li className="flex items-center gap-2 p-4">
            <div className="w-8 h-8 bg-[#FFFBE6] rounded-full grid place-content-center">
              <Image src="/assets/icons/profile-circle.svg" width={24} height={24} alt="profile" />
            </div>

            <p className="flex-auto text-sm">Profile</p>

            <Link href="/profile/info">
              <ChevronRight />
            </Link>
          </li>

          <Separator />

          <li className="flex items-center gap-2 p-4">
            <div className="w-8 h-8 bg-[#E6E9EE] rounded-full grid place-content-center">
              <Image src="/assets/icons/notification.svg" width={24} height={24} alt="notification" />
            </div>

            <p className="flex-auto text-sm">Push Notifications</p>

            <Switch id="push-notification" />
          </li>

          <Separator />

          <li className="flex items-center gap-2 p-4">
            <div className="w-8 h-8 bg-success-50 rounded-full grid place-content-center">
              <Image src="/assets/icons/lock.svg" width={24} height={24} alt="security" />
            </div>

            <p className="flex-auto text-sm">Security</p>

            <Link href="/profile/security">
              <ChevronRight />
            </Link>
          </li>

          <Separator />

          <li className="flex items-center gap-2 p-4">
            <div className="w-8 h-8 bg-[#EEE6E9] rounded-full grid place-content-center">
              <Image src="/assets/icons/document-text.svg" width={24} height={24} alt="terms" />
            </div>

            <p className="flex-auto text-sm">Terms & Conditions</p>

            <ChevronRight />
          </li>

          <Separator />
        </ul>
      </section>
    </div>
  );
};

export default Page;
