"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNav = ({ user }: MobileNavProps) => {
  const pathName = usePathname();
  return (
    <section className="w-full max-w-[200px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src={"/icons/hamburger.svg"}
            width={30}
            height={30}
            alt="Menu"
          />
        </SheetTrigger>
        <SheetContent side="left" className="bg-white">
            <SheetClose asChild>
              <Link href="/" className="flex gap-3  px-3 items-center ">
                <Image
                  height={34}
                  width={34}
                  alt="Horizon"
                  src="/icons/logo.svg"
                />
                <h1 className="text-black text-3xl text-black-1 font-semibold ">
                  Horizon
                </h1>
              </Link>
            </SheetClose>
            <div className="mobilenav-sheet flex flex-col pt-16 gap-12">
              <SheetClose asChild>
                <nav className="flex h-full flex-col gap-3">
                  {sidebarLinks.map((e, i) => {
                    const isActive =
                      e.route == pathName || pathName.startsWith(`${e.route}/`);
                    return (
                      <SheetClose asChild key={i}>
                        <Link
                          href={e.route}
                          className={cn("mobilenav-sheet_close w-full", {
                            "bg-bank-gradient": isActive,
                          })}
                        >
                          <Image
                            height={20}
                            width={20}
                            alt="Horizon"
                            src={e.imgURL}
                            className={cn({
                              "brightness-[3] invert-0": isActive,
                            })}
                          />
                          <p
                            className={cn(
                              "text-16 font-semibold text-black-2",
                              {
                                "!text-white ": isActive,
                              }
                            )}
                          >
                            {e.label}
                          </p>
                        </Link>
                      </SheetClose>
                    );
                  })}
                </nav>
              </SheetClose>
              footer
            </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
