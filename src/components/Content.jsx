import React from 'react'
import desktopEgg from '../assets/images/desktop/image-transform.jpg'
import stand from '../assets/images/desktop/image-stand-out.jpg'
import cherry from '../assets/images/desktop/image-graphic-design.jpg'
import orange from '../assets/images/desktop/image-photography.jpg'

const Content = () => {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col justify-center items-center bg-white space-y-4 p-8">
        <h2 className="text-4xl font-extrabold font-fraunces text-center ">
            Transform your brand
        </h2>
        <p className="font-bold text-grayish-blue text-xl">
            We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do the most of the marketing for you.
        </p>
        <button className="font-extrabold text-2xl font-fraunces">
            LEARN MORE
        </button>
      </div>
      <div>
        <img 
            src={desktopEgg} 
            alt="egg" 
            className="object-contain"
        />
      </div>
      <div>
        <img 
            src={stand} 
            alt="egg" 
            className="object-contain"
        />
      </div>
      <div className="flex flex-col justify-center items-center bg-white space-y-4 p-8">
        <h2 className="text-4xl font-extrabold font-fraunces text-center ">
            Transform your brand
        </h2>
        <p className="font-bold text-grayish-blue text-xl">
            We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do the most of the marketing for you.
        </p>
        <button className="font-extrabold text-2xl font-fraunces">
            LEARN MORE
        </button>
      </div>
      <div className="">
        <img 
          src={cherry} 
          alt="cherry" 
          className="object-contain relative"
        />
        <div className="absolute flex flex-col justify-end">
          <h3>
            
          </h3>
        </div>
      </div>
      <div>
        <img 
          src={orange} 
          alt="orange" 
          className="object-contain"
        />
      </div>
    </section>
  )
}

export default Content
