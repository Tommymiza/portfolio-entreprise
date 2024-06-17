import React, { FunctionComponent } from "react";

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

const EquipePage: FunctionComponent = () => {
    return (
        <section id="equipe" className="h-full">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 rounded-lg pt-6">
                    <div className="bg-white bg-opacity-80 p-6 rounded-lg flex flex-col shadow">
                        <span className="text-xl font-semibold text-gray-800 tracking-wide"></span>
                        <span className="text-gray-600 mt-4"></span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EquipePage;
