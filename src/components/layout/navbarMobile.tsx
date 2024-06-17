import React, { FunctionComponent } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";

const links = [
    {
        name : 'Accueil',
        path : '/'
    },
    {
        name : 'Nos service',
        path : '/'
    },
    {
        name : 'A propos',
        path : '/'
    },
    {
        name : 'Contact',
        path : '/'
    },
]

const NavbarMobile : FunctionComponent = () => {
    return(
        <Sheet>
            <SheetTrigger>
                <CiMenuFries className="text-[32px] text-pink-500"/>
            </SheetTrigger>
            <SheetContent className="flex flex-col w-1/2">
                <div className="mt-[-15px] mb-10  text-2xl">Logo</div>
                <div className="flex justify-center items-center">
                    <nav className="flex flex-col gap-8">
                        {links.map((link: any , index : number)=> {
                            return <Link href={link.path} key={index} className={`text-xl`}>{link.name}</Link>
                        })}
                    </nav>
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default NavbarMobile
