import React, { useContext } from 'react'
import BotonComponente from '../components/BotonComponente'
import { DataContext } from '../components/data/DataProvider'

export default function NotFound() {
  const {navegar}=useContext(DataContext)
  return (
    <div className='mt-24 flex justify-center  items-center flex-col'>
      
      <BotonComponente estilos="bg-gray-900 px-6 py-1 rounded-md text-gray-50 mt-24 " funcion={navegar} nombre="regresar"/>
      
      <h1 className='text-3xl text-gray-900 p-4'>Upsss la ruta que busca no existe</h1></div>
  )
}
