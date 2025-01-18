import React from "react";
import { useLanguage } from "../../../../Context/LanguageContext";
import aboutUsTranslations from "../../../../Constants/aboutUsTranslations";

export default function AboutUs() {
  const { language } = useLanguage();
  const t = (key) => aboutUsTranslations[language][key];

  return (
    <section className="bg-gray-800 py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-white mb-4">{t("title")}</h2>
          <p className="text-lg text-gray-300">{t("description")}</p>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-6">
          {/* Mission Section */}
          <div className="bg-gray-700 p-6 w-80 rounded-lg shadow-lg mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-white mb-4">{t("missionTitle")}</h3>
            <p className="text-gray-300">{t("missionDescription")}</p>
          </div>

          {/* Services Section */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-white mb-4">{t("servicesTitle")}</h3>
            <ul className="list-disc list-inside text-gray-300">
              {t("services").map((service, index) => (
                <li key={index} className="pt-4">{service}</li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-4">{t("contactTitle")}</h3>
            <p className="text-gray-300 mb-3">{t("contactDescription")}</p>
            <ul className="space-y-3 text-gray-300">
              <li>
                <strong className="text-[#878127]">{t("phone")}:</strong>{" "}
                <a
                  href="#"
                  // href={`tel:${t("phoneLink")}`}
                  className="hover:text-[#c6b035] transition duration-300"
                >
                  {t("phoneLink")}
                </a>
              </li>
              <li>
                <strong className="text-[#878127]">{t("email")}:</strong>{" "}
                <a
                  href="#"
                  // href={`mailto:${t("emailLink")}`}
                  className="hover:text-[#c6b035] transition duration-300"
                >
                  {t("emailLink")}
                </a>
              </li>
              <li>
                <strong className="text-[#878127]">{t("instagram")}:</strong>{" "}
                <a
                  href="#"
                  // href={`https://www.instagram.com/${t("instagramLink")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#c6b035] transition duration-300"
                >
                  {t("instagramLink")}
                </a>
              </li>
              <li>
                <strong className="text-[#878127]">{t("website")}:</strong>{" "}
                <a
                  href="#"
                  // href={`https://${t("websiteLink")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#c6b035] transition duration-300"
                >
                  {t("websiteLink")}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
