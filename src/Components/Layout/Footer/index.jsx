import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className='bg-gray-800 text-white py-10'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Logo Section */}
          <div className='flex flex-col items-center md:items-start'>
            <img
              src='/logo.png'
              alt='Elvora Logo'
              className='w-32 mb-4'
            />
            <p className='text-sm'>
              A Reliable Experienced.
            </p>
          </div>

          {/* Links Section */}
          <div className='flex flex-col items-center md:items-start'>
            <h4 className='text-lg font-semibold mb-4'>
              Help & Services
            </h4>
            <ul className='space-y-2'>
              <li>
                <a
                  href='#'
                  className='hover:text-gray-300 transition duration-300'
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='hover:text-gray-300 transition duration-300'
                >
                  Support
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='hover:text-gray-300 transition duration-300'
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className='flex flex-col items-center md:items-start'>
            <h4 className='text-lg font-semibold mb-4'>
              Follow Us
            </h4>
            <div className='flex space-x-4'>
              <a
                href='#'
                className='text-white hover:text-gray-400 transition duration-300'
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href='#'
                className='text-white hover:text-gray-400 transition duration-300'
              >
                <FaTwitter size={20} />
              </a>
              <a
                href='#'
                className='text-white hover:text-gray-400 transition duration-300'
              >
                <FaInstagram size={20} />
              </a>
              <a
                href='#'
                className='text-white hover:text-gray-400 transition duration-300'
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className='mt-8 text-center border-t border-gray-700 pt-4'>
          <p className='text-sm'>
            &copy; {new Date().getFullYear()} Elvora
            Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
