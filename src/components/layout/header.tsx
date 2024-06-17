import Link from "next/link";
import { FunctionComponent } from "react";
import { HiMenu } from "react-icons/hi";
import Navbar from "./navbar";
import NavbarMobile from "./navbarMobile";

const Header: FunctionComponent = () => {
  return (
    <header className="w-full py-4 xl:py-8 text-teal-950 fixed bg-white z-10 top-0">
      <div className="md:mx-28 sm:mx-12 flex justify-between items-center">
        <Link href={"#menu1"}>
          <span className="text-xl font-semibold">
            <HiMenu />
          </span>
        </Link>
        <div className="hidden xl:flex">
          <Navbar />
        </div>

        <div className="xl:hidden ">
          <NavbarMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
