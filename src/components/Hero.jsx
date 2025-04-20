import React from 'react'
import heroImage from '../assets/images/desktop/image-header.jpg'
import heroMobile from '../assets/images/mobile/image-header.jpg'
import arrowDown from '../assets/images/icon-arrow-down.svg';

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <img 
        src={heroImage} 
        alt="Hero image" 
        className="w-full h-full object-center object-cover hidden md:block"
        loading="lazy"
      />
      <img 
        src={heroMobile} 
        alt="Hero image" 
        className="w-full h-full object-center object-cover block md:hidden"
        loading="lazy"
      />

      <div className="absolute w-full h-full top-0 left-0 flex flex-col justify-center items-center space-y-8 md:space-y-12">
        <h1 className="text-White font-extrabold font-fraunces text-2xl md:text-5xl max-w-[40%] md:max-w-[100%] text-center">
            WE ARE CREATIVES
        </h1>
        <div>
            <img 
                src={arrowDown} 
                alt="arrow down" 
                className=""
            />
        </div>
      </div>
    </div>
  )
}

export default Hero
