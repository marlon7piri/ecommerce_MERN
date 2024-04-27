import React, { useContext } from 'react'
import BotonComponente from '../components/BotonComponente'
import CardPumas from '../components/CardPumas'
import { DataContext } from '../components/data/DataProvider'
import CardTacos from '../components/CardTacos'

export default function Tacos() {
  const {navegar}=useContext(DataContext)
  return (
    <div  className='w-full   grid lg:grid-cols-3 gap-4 p-8 md:grid-cols-2 mt-24'>
      <CardTacos/></div>
  )
}
