import React, { useContext } from 'react'
import BotonComponente from '../components/BotonComponente'
import CardGamaAlta from '../components/CardGamaAlta'
import { DataContext } from '../components/data/DataProvider'


export default function GamaAlta() {
  const {navegar}=useContext(DataContext)
  return (
    <div  className='w-full   grid lg:grid-cols-3 gap-4 p-8 md:grid-cols-2 mt-24'>
      
      <CardGamaAlta/></div>
  )
}
