import React from "react";
import HeroImg from "../../../Assets/Images/HeroSectionImg.jpg";

export default function Hero() {
  return (
    <section className='relative h-screen z-40'>
      <img
        src={HeroImg}
        alt='Hero Section'
        className='absolute inset-0 w-full h-full object-cover'
      />
      <div className='absolute inset-0 bg-black bg-opacity-50'></div>

      <div className='relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4'>
        <h2 className='text-4xl md:text-6xl font-bold mb-6'>
          Elvora: A Reliable Experienced
        </h2>
        <p className='text-lg md:text-xl mb-8'>
          Delivering excellence and innovation in every
          solution.
        </p>
        <a
          href='#about-us'
          className='bg-gray-800 hover:bg-gray-700 text-white py-3 px-6 rounded-lg text-lg transition duration-300'
        >
          Learn More
        </a>
      </div>
    </section>
  );
}
