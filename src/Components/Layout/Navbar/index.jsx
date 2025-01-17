import React from "react";

export default function NavBar() {
  return (
    <nav className='bg-gray-800 py-4 fixed top-0 left-0 w-full z-50'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='logo'>
          <h1 className='text-2xl text-white font-bold'>Logo</h1>
        </div>
        <ul className='flex items-center space-x-4'>
          <li>
            <a
              href='#'
              className='text-white hover:text-gray-300 transition duration-300'
            >
              Home
            </a>
          </li>
          <li className='relative group'>
            <a
              href='#'
              className='text-white hover:text-gray-300 transition duration-300'
            >
              Our Services
            </a>

            <ul className='absolute left-0 bg-gray-800 py-1 w-48 hidden group-hover:block'>
              <li className='py-2 px-4 hover:bg-gray-700'>
                <a
                  href='#'
                  className='text-white hover:text-yellow-600 transition duration-300'
                >
                  Catering and lobby services
                </a>
              </li>
              <li className='py-2 px-4 hover:bg-gray-700'>
                <a
                  href='#'
                  className='text-white hover:text-yellow-600 transition duration-300'
                >
                  Services of rooms and units
                </a>
              </li>
              <li className='py-2 px-4 hover:bg-gray-700'>
                <a
                  href='#'
                  className='text-white hover:text-yellow-600 transition duration-300'
                >
                  Transportation services
                </a>
              </li>
              <li className='py-2 px-4 hover:bg-gray-700'>
                <a
                  href='#'
                  className='text-white hover:text-yellow-600 transition duration-300'
                >
                  Management services and support for daily needs
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href='#'
              className='text-white hover:text-gray-300 transition duration-300'
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href='#'
              className='text-white hover:text-gray-300 transition duration-300'
            >
              Reservation & Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
