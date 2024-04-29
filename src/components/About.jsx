import React, { useContext } from 'react'
import { DataContext } from './data/DataProvider';

export default function About() {
  const {productos } = useContext(DataContext);

 
  return (
    <div className='w-full h-full p-24' id="about">

      
      <div className=' flex flex-col gap-20 relative'>

        <h2 className='lg:text-4xl text-gray-700 sm:text-5xl sm:w-full sm:text-center'>About US</h2>
        <p className=' text-gray-500  text-2xl'>I'am a bag is a self-assembled shopper from washable kraft paper coming is a set with replaceable handle and screw fastener.What is the best summary of Henry Petroski's "Design out of a Paper Bog"? The essay talks about how the design the grocery bag has reached near perfection. It suggests that plastic is better than paper in terms of durability and will be a better substitute for grocery bags.</p>
        <a href="" className='bg-rose-500 w-max px-6 py-2 text-gray-50 uppercase font-medium hover:bg-rose-700 sm:m-auto'>Learn More</a>
      
      </div>
    </div>
  )
}
