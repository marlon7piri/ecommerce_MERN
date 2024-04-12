import React from 'react'
import ColumnaCentro from './ColumnaCentro'
import ColumnaDerecha from './ColumnaDerecha'
import ColumnaLeftCentro from './ColumnaLeftCentro'

export default function HeaderCentro() {
  return (
    <div className='centro_container lg:grid lg:grid-cols-3 w-full h-full p-10  md:grid md:grid-cols-1 sm:grid sm:grid-cols-1 py-28 justify-center items-center'>

      <div className=' flex'><ColumnaLeftCentro/> </div>
      <div className=''><ColumnaCentro/> </div>
      <div className='flex items-center justify-center p-4 '><ColumnaDerecha/> </div>
    </div>
  )
}
