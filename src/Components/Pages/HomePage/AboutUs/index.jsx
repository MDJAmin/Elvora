import React from "react";

export default function AboutUs() {
  return (
    <section className='bg-gray-800 py-12'>
      <div className='container mx-auto px-6 md:px-12 lg:px-24'>
        <div className='text-center mb-8'>
          <h2 className='text-4xl font-bold text-white mb-4'>
            About Us
          </h2>
          <p className='text-lg text-gray-300'>
            Welcome to Elvora Group, your trusted partner in
            hospitality and exceptional services. We
            specialize in catering, accommodations,
            transportation, and comprehensive management
            solutions tailored to your needs.
          </p>
        </div>

        <div className='flex flex-col md:flex-row md:space-x-6'>
          {/* Mission Section */}
          <div className='bg-gray-700 p-6 w-80 rounded-lg shadow-lg mb-6 md:mb-0'>
            <h3 className='text-2xl font-bold text-white mb-4'>
              Our Mission
            </h3>
            <p className='text-gray-300'>
              At Elvora Group, we strive to deliver
              unparalleled services by blending innovation,
              professionalism, and dedication. Our mission
              is to make every moment with us memorable and
              to exceed expectations in every interaction.
            </p>
          </div>

          {/* Services Section */}
          <div className='bg-gray-700 p-6 rounded-lg shadow-lg mb-6 md:mb-0'>
            <h3 className='text-2xl font-bold text-white mb-4'>
              What We Offer
            </h3>
            <ul className='list-disc list-inside text-gray-300'>
              <li className='pt-4'>
                Catering and Lobby Services
              </li>
              <li className='pt-4'>
                Services for Rooms and Units
              </li>
              <li className='pt-4'>
                Transportation Solutions
              </li>
              <li className='pt-4'>
                Management Services for Daily Needs
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className='bg-gray-700 p-6 rounded-lg shadow-lg'>
            <h3 className='text-2xl font-bold text-white mb-4'>
              Contact Us
            </h3>
            <p className='text-gray-300 mb-3'>
              We’re here to assist you. Connect with us
              through any of the following:
            </p>
            <ul className='space-y-3 text-gray-300'>
              <li>
                <strong className='text-[#878127]'>
                  Phone:
                </strong>{" "}
                <a
                  href='tel:+989155201191'
                  className='hover:text-[#c6b035] transition duration-300'
                >
                  +98-915-520-1191
                </a>
              </li>
              <li>
                <strong className='text-[#878127]'>
                  Email:
                </strong>{" "}
                <a
                  href='mailto:elvora.group@gmail.com'
                  className='hover:text-[#c6b035] transition duration-300'
                >
                  elvora.group@gmail.com
                </a>
              </li>
              <li>
                <strong className='text-[#878127]'>
                  Instagram:
                </strong>{" "}
                <a
                  href='https://www.instagram.com/elvora_group'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-[#c6b035] transition duration-300'
                >
                  @Elvora_group
                </a>
              </li>
              <li>
                <strong className='text-[#878127]'>
                  Website:
                </strong>{" "}
                <a
                  href='https://www.elvoragroup.ir'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-[#c6b035] transition duration-300'
                >
                  www.elvoragroup.ir
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
