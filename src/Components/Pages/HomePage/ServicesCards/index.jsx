import React from "react";
import { useLanguage } from "../../../../Context/LanguageContext"; 
import servicesTranslations from "../../../../Constants/servicesTranslations"; 
import image1 from "../../../../Assets/Images/Services (1).jpg";
import image2 from "../../../../Assets/Images/Services (2).jpg";
import image3 from "../../../../Assets/Images/Services (3).jpg";
import image4 from "../../../../Assets/Images/Services (4).jpg";

export default function ServicesCards() {
  const { language } = useLanguage(); 

  const t = (key) => servicesTranslations[language][key]; 

  // Service data
  const services = [
    {
      title: t("catering"),
      description: t("cateringDescription"),
      image: image1,
    },
    {
      title: t("rooms"),
      description: t("roomsDescription"),
      image: image2,
    },
    {
      title: t("transportation"),
      description: t("transportationDescription"),
      image: image3,
    },
    {
      title: t("management"),
      description: t("managementDescription"),
      image: image4,
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          {language === "English"
            ? "Our Services"
            : language === "Persian"
            ? "خدمات ما"
            : "خدماتنا"}
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 cursor-pointer">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-lg"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
