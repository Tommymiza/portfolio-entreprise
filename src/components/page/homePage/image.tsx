'use client'
import React, { FunctionComponent } from "react";
import { motion } from "framer-motion"
import Image from "next/image";
const ImageHome: FunctionComponent = () => {
    return(
        <div className="w-full h-full">
            <div className="w-[600px] h-[600px] relative">
                <Image src="/landing.png" className="object-contain" priority quality={100} fill alt="logo"></Image>
            </div>
        </div>
    )
}

export default ImageHome
