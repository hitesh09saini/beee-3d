import React from 'react'

const About = () => {
  return (
    <div className='about h-screen relative bg-gradient-to-b from-[#FFDD01] to-[#B39B00] flex gap-4'>

      <img src="/tre.png" 
      alt="img" className='z-50 absolute right-0 top-1/2' />
      <div className='flex-1 p-4 text-xl font-bold'>
        <h1 className='text-6xl font-bold mb-6'>About</h1>
       Bees are amazing insects with over 20,000 different species. They play a crucial role in pollination, transferring pollen between flowers to help plants grow. Learn about the anatomy of bees, their social structure in hives, and how they contribute to nature.
      </div>
      <div className='flex-1 '>

      </div>
    </div>
  )
}

export default About