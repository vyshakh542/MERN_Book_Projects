import React from 'react'

import BannerCard from '../home/BannerCard'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
      <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>



        {/* left side */}
        <div className='md:w-1/2 space-y-8 bg-teal-100'>
          <h1 className='lg:text-6xl text-5xl font-bold text-black mb-5 lg:leading-tight leading-snug'>Buy and sell your books <span className='text-blue-700'>for the best prices</span></h1>
          <p>Find and read more books you'll love, and keep track of the books you want to read. Be part of the world's largest community of book lovers on Goodreads.</p>
          <div>
            <input type="search" placeholder='Search a book here' className='py-2 px-2 rounded-s-sm' />
            <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>Search</button>
          </div>
        </div>


        {/* right side */}
        <div>
          <BannerCard></BannerCard>
        </div>


      </div>

    </div>






  )
}

export default Banner