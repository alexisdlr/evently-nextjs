"use client";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";
import SwitcherTheme from "../ui/SwitcherTheme";
import { useThemeStore } from "@/store/theme";
import { MotionHeader } from "./animated/MotionHeader";

const Header = () => {
  const { darkMode } = useThemeStore();

  return (
    <MotionHeader
      initial={{ opacity: 0 }}
      animate={{ opacity: 100 }}
      transition={{ delay: 0.5 }}
      className="w-full border-b dark:border-primary-500"
    >
      <div className="wrapper flex items-center justify-between">
        <Link rel="stylesheet" href="/">
          {darkMode ? (
            <Image
              src="/assets/images/logo-darkmode.svg"
              alt="Evently"
              width={128}
              height={38}
            />
          ) : (
            <Image
              src="/assets/images/logo.svg"
              alt="Evently"
              width={128}
              height={38}
            />
          )}
        </Link>
        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>
        <div className="flex w-32 gap-x-4 justify-end items-center">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full" size={"lg"}>
              <Link href="/sign-in" className="dark:text-white">
                Login
              </Link>
            </Button>
          </SignedOut>
          <SwitcherTheme />
        </div>
      </div>
    </MotionHeader>
  );
};

export default Header;
