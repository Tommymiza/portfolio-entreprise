import Link from "next/link";
import React, { FunctionComponent } from "react";
import { FaLinkedinIn , FaWhatsapp , FaFacebookMessenger  , FaMailBulk } from "react-icons/fa"

const  socials = [
    {icon : <FaLinkedinIn/> , path :""},
    {icon : <FaMailBulk/> , path :""},
    {icon : <FaWhatsapp/> , path :""},
    {icon : <FaFacebookMessenger/> , path :""},
]

const SocialLinks: FunctionComponent =() => {
    return(
        <div className="flex gap-6">
            { socials.map((item:any , index: number)=>{
                return(
                    <Link href={item.path} key={index} 
                        className="w-9 h-9 border border-sky-500 justify-center items-center text-sky-500 text-base rounded-full flex duration-500">
                        {item.icon}
                    </Link>
                )
            })}
            
        </div>
    )
}

export default SocialLinks