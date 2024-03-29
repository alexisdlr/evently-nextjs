"use client";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { Separator } from "../ui/separator";
import NavItems from "./NavItems";
import { useThemeStore } from "@/store/theme";
import { Button } from "../ui/button";

const MobileNav = () => {
  const { darkMode } = useThemeStore();
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          {darkMode ? (
            <Image
              src={"/assets/icons/menu-white.svg"}
              alt="Evently"
              width={24}
              height={24}
            />
          ) : (
            <Image
              src={"/assets/icons/menu.svg"}
              alt="Evently"
              width={24}
              height={24}
            />
          )}
        </SheetTrigger>
        <SheetContent
          className={
            darkMode
              ? "bg-[#040D12]  flex flex-col gap-6 md:hidden"
              : " bg-white flex flex-col gap-6 md:hidden"
          }
        >
         {
          darkMode ? (
            <Image
              src={"/assets/images/logo-darkmode.svg"}
              alt="Evently"
              width={128}
              height={38}
            />
          ) : (
            <Image
              src={"/assets/images/logo.svg"}
              alt="Evently"
              width={128}
              height={38}
            />
          )
         }
          <Separator />
          <NavItems />
          <SheetClose asChild>
            <Button className="p-medium-16 dark:text-white">Close</Button>
          </SheetClose>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
