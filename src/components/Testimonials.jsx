import React from 'react'
import emily from '../assets/images/image-emily.jpg'
import jennie from '../assets/images/image-jennie.jpg'
import thomas from '../assets/images/image-thomas.jpg'

const testimonialData = [
    {
        image: emily,
        paragraph: 'We put our trust in Sunnyside and they delivered, making sure sure our needs were met and deadlines were always hit.',
        name: 'Emily R.',
        role: 'Marketing Director'
    },
    {
        image: thomas,
        paragraph: 'Sunnyside\'s enthusiasm coupled with their keen interest in our brand\'s success made it a satisfying and enjoyable experience.',
        name: 'Thomas S.',
        role: 'Chief Operating Officer'
    },
    {
        image: jennie,
        paragraph: 'Incredible end result! Our sells increased over 4o0% when we worked with sunnyside. Highly recommended!',
        name: 'Jennie F.',
        role: 'Business Owner'
    },
]

const Testimonials = () => {
  return (
    <section className="w-[80%] mx-auto bg-white">
        <h2 className="text-center font-bold font-fraunces text-2xl pt-14 text-very-grayish-blue">Client Testimonials</h2>
      <div className="container mx-auto py-18 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {
            testimonialData.map((data, index) => (
                <div key={index} className="flex flex-wrap items-center justify-center gap-4 text-center max-w-md">
                    <div>
                        <img 
                            src={data.image} 
                            alt={data.name} 
                            className="rounded-full"
                        />
                    </div>
                    <div>
                        <p className="text-sm text-dark-blue font-medium">{data.paragraph}</p>
                    </div>
                    <div>
                        <p className="font-extrabold font-fraunces">{data.name}</p>
                        <p className="text-xs text-very-grayish-blue">{data.role}</p>
                    </div>
                </div>
            ))
        }
      </div>
    </section>
  )
}

export default Testimonials
