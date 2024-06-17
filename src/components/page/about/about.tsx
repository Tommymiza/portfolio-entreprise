import Image from "next/image";
import React, { FunctionComponent } from "react";
import ItemInfo from "./item";
import ItemCarousel from "./itemCarousel";

const AboutItem : FunctionComponent = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div id="about" className="flex flex-col justify-center h-95 items-center py-20">
                <div className="w-1/2 py-10 text-3xl text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui consectetur laboriosam, error quas officia consequatur ab vitae eum assumenda nostrum? Exercitationem,</div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-5">
                    <div className="flex flex-col" >
                        <div className="text-purple-600">
                            <span className="text-3xl ">80</span>
                            <i className="fa fa-plus text-xl"></i>
                        </div>
                        <span className="text-center">info</span>
                    </div>
                    <div className="flex flex-col" >
                        <div className="text-purple-600">
                            <span className="text-3xl ">80</span>
                            <i className="fa fa-plus text-xl"></i>
                        </div>
                        <span className="text-center">info</span>
                    </div>
                    <div className="flex flex-col" >
                        <div className="text-purple-600">
                            <span className="text-3xl ">80</span>
                            <i className="fa fa-plus text-xl"></i>
                        </div>
                        <span className="text-center">info</span>
                    </div>
                </div>
                <div className="py-5">
                    <button className="p-2 text-white bg-gray-400 rounded-lg">voir plus</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-5">
                    <div>Card 1</div>
                    <div>Card 2</div>
                    <div>card 3</div>
                </div>
            </div>
            <div id="equipe" className="flex justify-center items-center h-screen w-full bg-purple-100 rounded-lg shadow-md">
                <ItemCarousel />
            </div>
        </div>
    )
}

export default AboutItem