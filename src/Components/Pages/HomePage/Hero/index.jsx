import React from "react";
import HeroImg from "../../../../Assets/Images/HeroSectionImg.jpg";
import { useLanguage } from "../../../../Context/LanguageContext";
import heroTranslation from "../../../../Constants/heroTranslations";

export default function Hero() {
  const { language } = useLanguage(); 
  const t = (key) => heroTranslation[language][key];

  return (
    <section className="relative h-screen z-40">
      <img
        src={HeroImg}
        alt="Hero Section"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 pt-16">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          {t("heroTitle")}
          <br />
          <br />
          {t("heroSubtitle")}
        </h2>
        <p className="text-lg md:text-xl mb-8">
          {t("heroDescription")}
        </p>
        <a
          href="#"
          className="bg-gray-800 hover:bg-gray-700 text-white py-3 px-6 rounded-lg text-lg transition duration-300"
        >
          {t("learnMore")}
        </a>
      </div>
    </section>
  );
}
