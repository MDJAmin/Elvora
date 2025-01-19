import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { elvoraLogo } from "../../../Constants";
import { EL } from "../../../Constants";
import footerTranslations from "../../../Constants/footerTranslations";
import { useLanguage } from "../../../Context/LanguageContext";

export default function Footer() {
  const { language } = useLanguage(); 
  const t = footerTranslations[language]; 

  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src={EL}
              alt="Elvora Logo"
              className="w-28 mb-4 ms-2"
            />
            <p className="text-sm">{t.logoTagline}</p>
          </div>

          {/* Links Section */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold mb-4">{t.helpServices}</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-[#878127] transition duration-300"
                >
                  {t.links.faq}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#878127] transition duration-300"
                >
                  {t.links.support}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#878127] transition duration-300"
                >
                  {t.links.contactUs}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold mb-4">{t.followUs}</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-[#878127] transition duration-300"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#878127] transition duration-300"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#878127] transition duration-300"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#878127] transition duration-300"
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Elvora Company. {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
