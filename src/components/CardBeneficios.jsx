import React from 'react'
import {beneficios} from './data/data'

export default function CardBeneficios() {
  return (
    <div className='flex p-4 gap-20'>
      {

beneficios.map(e=>{


  return(
    <div className='flex flex-col justify-center items-center' key={e.id}>
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
