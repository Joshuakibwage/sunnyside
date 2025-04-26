import React from 'react'
import Hero from '../components/Hero';
import Content from '../components/Content'
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <section className="w-full">
      <Hero />
      <Content />
      <Testimonials />
    </section>
  )
}

export default Home
