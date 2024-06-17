"use client";
import { FunctionComponent, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ItemInfo from './item';


interface ItemData {
  text: string;
  name: string;
  title: string;
  imageUrl: string;
}

const item: ItemData[] = [
  {
    text: "Innovating the Future, One Line at a Time",
    name: "Fiononana Safidinirina",
    title: "Développeur web",
    imageUrl: "/safidy.jpg",
  },
  {
    text: "Transforming Ideas into Reality",
    name: "Fiononana Safidinirina",
    title: "Responsable commercial",
    imageUrl: "/safidy.jpg",
  }
];

const ItemCarousel: FunctionComponent = () => {
    const [current, setCurrent] = useState<number>(0);

    const nextTestimonial : any = () => {
        setCurrent((prev) => (prev === item.length - 1 ? 0 : prev + 1));
    };

    const prevTestimonial: any = () => {
        setCurrent((prev) => (prev === 0 ? item.length - 1 : prev - 1));
    };

    return (
        <>
            <ItemInfo {...item[current]} />
            <button
                onClick={prevTestimonial}
                className="absolute left-20 transform -translate-y-1/2 p-2 bg-blue-600 text-white rounded-full"
            >
                <FaChevronLeft />
            </button>
            <button
                onClick={nextTestimonial}
                className="absolute right-20 transform -translate-y-1/2 p-2 bg-blue-600 text-white rounded-full"
            >
                <FaChevronRight />
            </button>
        </>
    );
};

export default ItemCarousel;
