import React, { useState, useEffect } from 'react';

const sliderData = [
  {
    imageUrl: './Bus-illustration.png',
    text: 'Image 1: Cute Kitten',
  },
  {
    imageUrl: './bus-stop-illustration-five.png',
    text: 'Image 2: Adorable Kitten',
  },
  {
    imageUrl: './bus-stop-illustration-four.png',
    text: 'Image 3: Playful Kitten',
  },
  {
    imageUrl: './bus-stop-illustration-three.png',
    text: 'Image 4: Sleepy Kitten',
  },
  {
    imageUrl: './bus-stop-illustration.png',
    text: 'Image 5: Curious Kitten',
  },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === sliderData.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-24 w-full h-64 relative overflow-hidden bg-slate-900 " >
      {sliderData.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >

<div className='flex justify-between items-center'>
          <div className=" w-1/3  text-white p-2 ">
            {slide.text}
          </div>
             
<img src={slide.imageUrl} alt={`Slide ${index}`} className="w-2/3 h-full max-w-lg" />
</div>

          
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
