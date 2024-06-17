import React, { FunctionComponent } from "react";
import Link from "next/link";
import Navbar from "./navbar";
import NavbarMobile from "./navbarMobile";
import { HiMenu } from 'react-icons/hi';

const Header: FunctionComponent = () => {
    return (
        <header className="w-full py-4 xl:py-8 text-teal-950 fixed bg-white z-10">
            <div className="container mx-auto flex justify-between items-center">
                <Link href={"#menu1"}>
                    <span className="text-xl font-semibold">
                        <HiMenu />
                    </span>
                </Link>
                <div className="hidden xl:flex">
                    <Navbar/>
                </div>

                <div className="xl:hidden ">
                    <NavbarMobile/>
                </div>
            </div>
        </header>
    );
};

export default Header;
