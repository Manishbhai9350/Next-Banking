import React from "react";
import SideBar from "../../components/SideBar";
import MobileNav from "../../components/MobileNav";
import Image from "next/image";
import { getLoggedInUser } from "@/lib/actions/user.action";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = await getLoggedInUser()
  return (
    <main className="flex h-screen w-full">
      <SideBar user={loggedIn} />

      <div className="flex flex-col size-full">
        <div className="root-layout">
          <Image src={"/icons/logo.svg"} width={30} height={30} alt="Horizon" />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
