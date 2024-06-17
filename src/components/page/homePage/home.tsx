import Image from "next/image";
import { FunctionComponent } from "react";

const HomePage: FunctionComponent = () => {
  return (
    <section id="home" className="w-full">
      <div className="px-2 w-full">
        <div className="flex sm:flex-col-reverse md:flex-row py-10 w-full sm:gap-2 md:gap-0 items-center">
          <div className="md:w-[50%] sm:w-[100%] sm:text-center md:text-left flex flex-col items-center">
            <h1 className="h1 max-w-[700px] mb-6 leading-19">
              Développez votre potentiel avec nos talents numériques
            </h1>
            <p className="max-w-[700px] text-xs mb-9 w-full self-left">
              Propulsez votre startup avec notre maîtrise technologique
            </p>
            <div className="w-full">
              <button className="px-6 py-2 bg-pink-500 text-sm text-white font-semibold rounded-lg tracking-widest">
                Contactez-nous
              </button>
            </div>
          </div>
          <div className="md:w-[50%] sm:w-[100%] h-[400px] relative">
            <Image
              src="/landing.png"
              className="object-contain"
              quality={100}
              fill
              alt="logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
