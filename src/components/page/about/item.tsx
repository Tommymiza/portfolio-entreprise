import Image from "next/image";
import React, { FunctionComponent } from "react";

interface ItemProps {
    text: string;
    name: string;
    title: string;
    imageUrl: string;
}

const ItemInfo : FunctionComponent<ItemProps> = ({text,name, title ,imageUrl}) => {
    return (
        <div className="flex flex-col justify-center items-center py-20 w-1/2">
            <div className="texy-center text-6xl text-purple-400">
                <i className="fa-solid fa-quote-left"></i>
            </div>
            <blockquote className="text-center text-2xl py-10 italic text-gray-600">
                <p>“{text}”</p>
            </blockquote>
            <div className="mt-4 flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image src={imageUrl} alt={name} width={48} height={48} />
                </div>
                <div className="ml-4">
                    <div className="text-lg font-medium text-gray-900">{name}</div>
                    <div className="text-sm text-gray-500">{title}</div>
                </div>
            </div>
        </div>
    )
}

export default ItemInfo