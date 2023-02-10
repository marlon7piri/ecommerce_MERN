import React from 'react'
import ColumnaCentro from './ColumnaCentro'
import ColumnaDerecha from './ColumnaDerecha'
import ColumnaLeftCentro from './ColumnaLeftCentro'

export default function HeaderCentro() {
  return (
    <div className='centro_container grid grid-cols-3 w-full h-full p-10'>

      <div className=' flex'><ColumnaLeftCentro/> </div>
      <div className=''><ColumnaCentro/> </div>
      <div className='flex items-center justify-center p-4 '><ColumnaDerecha/> </div>
    </div>
  )
}
