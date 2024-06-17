import AboutItem from "@/components/page/about/about";
import HomePage from "@/components/page/homePage/home";
import ServicePage from "@/components/page/service/service";
import React, { FunctionComponent } from "react";

const Home: FunctionComponent = () => {
    return (
        <div>
            <HomePage />
            <ServicePage />
            <AboutItem />
        </div>
    );
};

export default Home;
