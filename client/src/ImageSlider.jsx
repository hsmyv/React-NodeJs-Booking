import React, { useState } from 'react';

const ImageSlider = ({ photos }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % photos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <div className="relative w-full max-w-xl mx-auto group rounded-t-2xl overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {photos.map((photo, index) => (
            <img
              key={index}
              className="w-full object-cover"
              src={`http://localhost:4000/${photo}`}
              alt={`Slide ${index + 1}`}
            />
          ))}
        </div>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 left-4 bg-blue-700 p-2 rounded-full opacity-0 group-hover:opacity-100 hover:bg-blue-600 transition-opacity duration-300"
        onClick={prevSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-3 h-3 text-white"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </button>

      <button
        className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-blue-700 p-2 rounded-full opacity-0 group-hover:opacity-100 hover:bg-blue-600 transition-opacity duration-300"
        onClick={nextSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-3 h-3 text-white"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  );
};

export default ImageSlider;
