import React from 'react'
import heroImage from '../assets/images/desktop/image-header.jpg'

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <img 
        src={heroImage} 
        alt="Hero image" 
        className="w-full h-full object-center object-cover"
      />

      <div className="absolute w-full h-full top-0 left-0 flex flex-col justify-center items-center text-White font-extrabold font-fraunces text-5xl">
        <h1>
            WE ARE CREATIVES
        </h1>
      </div>
    </div>
  )
}

export default Hero
