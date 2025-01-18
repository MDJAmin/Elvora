import React, { useState } from "react";
import translationsContactUs from "../../../../Constants/ContactUs";
import { useLanguage } from "../../../../Context/LanguageContext";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { language } = useLanguage(); 

  const t = (key) => {
    return translationsContactUs[language]?.contact[key] || key;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const mailtoLink = `mailto: *** ?subject=Message from ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AMessage: ${formData.message}`;
    window.location.href = mailtoLink;

    setFormData({
      name: "",
      email: "",
      message: "",
    });

    setIsSubmitting(false);
  };

  return (
    <section id="contact-us" className="bg-gray-100 py-10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold mb-12">{t("title")}</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="md:w-1/3 mt-6 md:mt-0">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t("namePlaceholder")}
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-md"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t("emailPlaceholder")}
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-md"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t("messagePlaceholder")}
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-md"
                rows="4"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#878127] text-white py-2 rounded-md hover:bg-[#6e681f] transition duration-300"
              >
                {isSubmitting ? t("sending") : t("sendMessage")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
