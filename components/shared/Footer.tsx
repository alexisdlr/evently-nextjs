import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-col flex-between gap-4 p-5 text-center sm:flex-row">
        <Link href={"/"}>
          <Image
            src="/assets/images/logo.svg"
            alt="Evently"
            width={128}
            height={38}
          />
        </Link>
        <p className="p-medium-16">
          &copy; 2021 Evently. All rights reserved.{" "}
        </p>
        <p className="p-medium-16">
          Coded by <Link href="https://github.com/alexisdlr" target="_blank" className="text-primary-500 font-semibold underline">Alexis De Leon</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
