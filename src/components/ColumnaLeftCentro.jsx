import React from 'react'
import { Link } from 'react-router-dom'

export default function ColumnaLeftCentro() {
  return (
    <div className='flex  flex-col gap-10 items-center justify-center p-2 '>



  <h2 className='text-3xl text-rose-300 sm:w-full'>Self-Assembled Washable</h2>

  <h1 className='tracking-in-expand-fwd-top  lg:text-6xl text-gray-700 w-max   font-semibold sm:text-3xl p-2 '>Craft Paper Bag</h1>
  <p className='text-2xl text-gray-700'>$200.00</p>
  <Link to={`/details/carteraazul`} className='bg-rose-500 w-max px-6 py-2 text-gray-50 uppercase font-medium hover:bg-rose-700'>View Detail</Link>



    </div>
  )
}
