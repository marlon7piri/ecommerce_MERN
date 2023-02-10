import React from 'react'
import { Link } from 'react-router-dom'

export default function ColumnaLeftCentro() {
  return (
    <div className='flex  flex-col gap-10 items-center justify-center'>



  <h2 className='text-3xl text-rose-300'>Self-Assembled Washable</h2>

  <h1 className='tracking-in-expand-fwd-top  text-6xl text-gray-700 w-[500px]   font-semibold '>Craft Paper Bag</h1>
  <p className='text-2xl text-gray-700'>$200.00</p>
  <Link to={`/details/carteraazul`} className='bg-rose-500 w-max px-6 py-2 text-gray-50 uppercase font-medium hover:bg-rose-700'>View Detail</Link>



    </div>
  )
}
