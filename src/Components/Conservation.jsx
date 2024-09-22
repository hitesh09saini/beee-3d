import React from 'react'

const Conservation = () => {
  return (
    <div className='conservation h-screen p-4 font-bold bg-[#B39B00] relative'>
      <img src="/bees.png" alt="" className='absolute left-0 bottom-0 z-10 '/>
      <div className='tracking-wide text-xl z-50'>
        <h1 className='text-6xl mb-6'>Conservation</h1>
        Bees are under threat due to habitat loss, pesticides, and climate change. Without them, our food supply
        would be at risk. Discover how you can help conserve bee populations by
        planting bee-friendly gardens, reducing pesticide use, and supporting local beekeepers.
      </div>
    </div>
  )
}

export default Conservation