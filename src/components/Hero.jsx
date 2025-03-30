// src/components/Hero.jsx
import React, { useState, useEffect } from "react";

const Hero = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="relative w-full">
      <div className="relative w-full aspect-[16/9] md:h-[600px]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentIndex === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.src}
              alt={`carousel ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50 flex items-center">
              <p className="text-white text-4xl font-bold uppercase pl-[13%]">
                We can deliver <br /> your cargo worldwide
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
