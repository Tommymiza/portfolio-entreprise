"use client"
import React, { FunctionComponent } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const links = [
    {
        name : 'Accueil',
        path : '/'
    },
    {
        name : 'Nos service',
        path : '#service'
    },
    {
        name : 'Notre équipe',
        path : '#equipe'
    },
    {
        name : 'A propos',
        path : '#about'
    },
    {
        name : 'Contact',
        path : '#contact'
    },
]

const Navbar : FunctionComponent = () => {
    const pathName = usePathname()
    console.log(pathName)

    return (
        <nav className="flex gap-8">
            {links.map((link: any , index : number)=> {
                return <Link href={link.path} key={index} className={`
                    ${ link.path === pathName && 'text-pink-500 border-b-2 border-pink-500'} hover:text-pink-500 text-xs trasition-all`}>{link.name}</Link>
            })}
        </nav>
    )
}

export default Navbar