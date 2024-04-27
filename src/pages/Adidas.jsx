import React, { useContext } from 'react'
import BotonComponente from '../components/BotonComponente'
import CardAdidas from '../components/CardAdidas'
import { DataContext } from '../components/data/DataProvider'


export default function Adidas() {
  const {navegar}=useContext(DataContext)
  return (
    <div 
      className='w-full   grid lg:grid-cols-3 gap-4 p-8 md:grid-cols-2 mt-24'>

      
      <CardAdidas/>
      </div>
  )
}
