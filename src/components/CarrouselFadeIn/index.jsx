import React, { useState, useEffect } from 'react';
import '../CarrouselFadeIn/CarrouselFadeIn.css';
// Assegure-se de que os caminhos estejam corretos e que os arquivos exportem como URLs, se necessário.
import PhotoModel1 from '../../Imgs/PhotoModel.svg'; 
import PhotoModel2 from '../../Imgs/PhotoModel.svg';
import PhotoModel3 from '../../Imgs/PhotoModel.svg';

const images = [
  PhotoModel1,
  PhotoModel2,
  PhotoModel3
];

export default function CarrouselFadeIn() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carrousel-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`fade ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
    </div>
  );
}
