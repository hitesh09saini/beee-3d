import React from 'react'

const Products = () => {
    return (
        <div className='products h-[80vh] relative overflow-hidden bg-black '>
            <div className='absolute opacity-[0.7]  bg-bee-stripes top-[0%] left-[0%] rotate-45 w-[200%] h-[250%]'>
            </div>
            <div className='z-50 absolute p-5 top-0 text-2xl font-bold text-white left-0 w-full h-full'>
                <h1 className='text-6xl mb-4'>Products</h1>
                From honey to beeswax, <span className='bg-[#FFDD00]'>bees provide us with many natural products.</span>
                Honey is not only delicious but has numerous health benefits. Beeswax
                is used in candles, cosmetics, and more. Learn how these products are made
                and their importance in our daily lives.<span className='animate-ping'>.</span><span className='animate-ping'>.</span><span className='animate-ping'>.</span>
            </div>
        </div>
    )
}

export default Products