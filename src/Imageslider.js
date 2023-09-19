import React, { useState, useEffect } from 'react';

const sliderData = [
  {
    imageUrl: './Bus-illustration.png',
    text: 'Real Time Location ',
  },
  {
    imageUrl: './bus-stop-illustration-five.png',
    text: 'Bus is Late or Not ?',
  },
  {
    imageUrl: './bus-stop-illustration-four.png',
    text: 'What is the timing of bus ',
  },
  {
    imageUrl: './bus-stop-illustration-three.png',
    text: 'Real Time seat booking in Bus',
  },
  {
    imageUrl: './bus-stop-illustration.png',
    text: 'Hassle free journey',
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
    <div className="mt-24 w-full h-64 relative top-4 overflow-hidden bg-slate-900 " >
      {sliderData.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >

<div className=' mt-10 flex justify-around items-center'>
          <div className=" text-2xl w-1/3  text-white p-2 ">
            {slide.text}
          </div>
             
<img src={slide.imageUrl} alt={`Slide ${index}`} className="w-2/3 h-full max-w-sm" />
</div>

          
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
