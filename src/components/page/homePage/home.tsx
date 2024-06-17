import React, { FunctionComponent } from "react";
import ImageHome from "./image";

const HomePage: FunctionComponent = () => {
    return (
        <section id="home" className="h-full">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-20  xl:pb-28">
                    <div className="order-2 xl:order-none text-center xl:text-left">
                        <h1 className="h1 max-w-[700px] mb-6 leading-19">Développez votre potentiel avec nos talents numériques</h1>
                        <p className="max-w-[700px] text-xs mb-9">Propulsez votre startup avec notre maîtrise technologique</p>
                        <button className="px-6 py-2 bg-pink-500 text-sm text-white font-semibold rounded-lg tracking-widest">Contactez-nous</button>
                    </div>
                    <div className="order-1 xl:order-none mb-8 xl:mb-0 ">
                        <ImageHome />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomePage;
