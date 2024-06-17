import React, { FunctionComponent } from "react";

const ServicePage: FunctionComponent = () => {
    return (
        <section id="service" className="h-full">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 rounded-lg pt-6">
                    <div className="bg-white bg-opacity-80 p-6 rounded-lg flex flex-col shadow">
                        <span className="text-xl font-semibold text-gray-800 tracking-wide">Accompagnement digitale</span>
                        <span className="text-gray-600 mt-4">Dynamisez votre entreprise avec la digitalisation de vos process tout en augmentant votre productivité.</span>
                    </div>
                    <div className="bg-white bg-opacity-80 p-6 rounded-lg flex flex-col shadow">
                        <span className="text-xl font-semibold text-gray-800 tracking-wide">Conception de vitrine digitale</span>
                        <span className="text-gray-600 mt-4">Votre entreprise mérite un site web à la hauteur de ses ambitions. Car c&apos;est la fondation numérique de votre entreprise.</span>
                    </div>
                    <div className="bg-white bg-opacity-80 p-6 rounded-lg flex flex-col shadow">
                        <span className="text-xl font-semibold text-gray-800 tracking-wide">AI booster</span>
                        <span className="text-gray-600 mt-4">Boostez votre productivité avec la puissance de l&apos;IA, la clé de voûte d&apos;un potentiel inexploité.</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicePage;
