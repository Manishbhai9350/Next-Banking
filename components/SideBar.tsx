"use client";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Footer from "./Footer";

const SideBar = ({user}:SiderbarProps) => {
  const pathName = usePathname();
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-5">
        <Link href="/" className={cn("sidebar-link mb-6")}>
          <Image height={34} width={34} alt="Horizon" src="/icons/logo.svg" />
          <h1 className=" text-black-1 font-ibm-plex-serif font-semibold text-3xl">Horizon</h1>
        </Link>
        {sidebarLinks.map((e, i) => {
          const isActive =
            e.route == pathName || pathName.startsWith(`${e.route}/`);
          return (
            <Link
              key={i}
              href={e.route}
              className={cn("sidebar-link", { "bg-bank-gradient": isActive })}
            >
              <div className="relative size-6 ">
                <Image
                  height={34}
                  width={34}
                  alt="Horizon"
                  src={e.imgURL}
                  className={cn({
                    "brightness-[3] invert-0": isActive,
                  })}
                />
              </div>
                <p className={cn('sidebar-label',{
                    '!text-white ':isActive
                })}>
                    {e.label}
                </p>
            </Link>
          );
        })}
      </nav>
      <Footer user={user}/>
    </section>
  );
};

export default SideBar;
