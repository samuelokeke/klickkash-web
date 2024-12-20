import getAuth from "../actions/auth";
import { logout } from "../actions/auth";
import AppBar from "@/components/shared/Appbar";
import SidePane from "@/components/shared/SidePane";

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = await getAuth();

  console.log(user, "user");

  return (
    <div className="bg-innerbackground flex">
      <aside className="fixed h-screen w-28 bg-background px-3 py-5">
        <SidePane logout={logout} />
      </aside>

      <div className="w-[calc(100%-7rem)] min-h-screen ml-28">
        <AppBar user={user} logout={logout} />

        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
