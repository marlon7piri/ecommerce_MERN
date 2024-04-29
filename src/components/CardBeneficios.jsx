import React from 'react'
import {beneficios} from './data/data'

export default function CardBeneficios() {
  return (
    <div className='w-full grid  grid-cols-4 gap-4 sm:grid-cols-1 md:grid-cols-4'>
      {

beneficios.map(e=>{


  return(
    <div className=' flex flex-col justify-center items-center bg-slate-100 p-4 rounded-md'  key={e.id}>
      <img src={e.image} alt="una imagen" className='w-[40px] object-cover mb-4'/>
      <p className='text-2xl text-gray-900 mb-4'>{e.title}</p>
      <p className='text-gray-500'>{e.description}</p>
    </div>
  )
})

      }
    </div>
  )
}
