"use client";
import { useThemeStore } from "@/store/theme";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const { darkMode } = useThemeStore();
  return (
    <footer className="border-t bg-primary-50 dark:bg-[#000114] dark:border-primary">
      <div className="flex-center wrapper flex-col flex-between gap-4 p-5 text-center sm:flex-row">
        <Link href={"/"} className="flex ">
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
        <p className="p-medium-16 dark:text-white">
          &copy; 2021 Evently. All rights reserved.{" "}
        </p>
        <p className="p-medium-16 dark:text-white">
          Coded by{" "}
          <Link
            href="https://github.com/alexisdlr"
            target="_blank"
            className="text-primary-500 font-semibold underline"
          >
            Alexis De Leon
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
