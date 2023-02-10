import React from 'react'

export default function About() {
  return (
    <div className='grid grid-cols-2 justify-between p-20 mt-[50px] gap-10' id="about">

      <div className='about_imagen w-full h-full'>

      
      </div>
      <div className='ml-10 mt-10 flex flex-col gap-20 relative'>

        <h2 className='text-4xl text-gray-700 '>About US</h2>
        <p className='text-gray-500'>I'am a bag is a self-assembled shopper from washable kraft paper coming is a set with replaceable handle and screw fastener.What is the best summary of Henry Petroski's "Design out of a Paper Bog"? The essay talks about how the design the grocery bag has reached near perfection. It suggests that plastic is better than paper in terms of durability and will be a better substitute for grocery bags.</p>
        <a href="" className='bg-rose-500 w-max px-6 py-2 text-gray-50 uppercase font-medium hover:bg-rose-700'>Lern More</a>
        <img src="https://res.cloudinary.com/dxi9fwjsu/image/upload/v1672784925/chanel-handbag-messenger-bag-tote-bag-women-s-handbags-984b628b9482c749068f4e052cdf3143_dfh9io.png" alt="cartera lv roja"  className='object-cover absolute w-[200px] bottom-0 right-24'/>
      </div>
    </div>
  )
}
