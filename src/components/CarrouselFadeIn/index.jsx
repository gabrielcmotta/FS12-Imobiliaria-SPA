import React, { useState, useEffect } from 'react';
import '../CarrouselFadeIn/CarrouselFadeIn.css';
// Assegure-se de que os caminhos estejam corretos e que os arquivos exportem como URLs, se necessário.
import PhotoModel1 from '../../Imgs/pexels-hiroom-17240699.jpg'; 
import PhotoModel2 from '../../Imgs/pexels-inspiredimages-133458.jpg';
import PhotoModel3 from '../../Imgs/pexels-victor-moragriega-1390556186-29057615.jpg';

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
