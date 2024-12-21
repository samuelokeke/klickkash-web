import getAuth from "../actions/auth";
import { logout } from "../actions/auth";
import Appbar from "@/components/shared/Appbar";
import SidePane from "@/components/shared/SidePane";

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = await getAuth();

  return (
    <div className="bg-innerbackground flex">
      <aside className="fixed md:block hidden h-screen w-28 bg-background px-3 py-5">
        <SidePane logout={logout} />
      </aside>

      <div className="md:w-[calc(100%-7rem)] w-full min-h-screen md:ml-28 ml-0">
        <Appbar user={user} logout={logout} />

        <main className="md:p-6 p-4">{children}</main>
      </div>
    </div>
  );
}
