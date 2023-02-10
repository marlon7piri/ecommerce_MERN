import React, { useContext, useState } from 'react'

import {DataContext} from '../components/data/DataProvider'
import {BsCheck2} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import CardProductos from '../components/CardProductos'


export default function Productos() {

  

  return (
    <div className="  w-full">
 
<CardProductos/>


<div className='mensaje fixed top-40 bottom-0 left-[40%] bg-gray-300 w-max h-max z-50 flex justify-center items-center m-auto rounded-lg'><div className='flex justify-center items-center gap-3  p-4 rounded-md'><h1 className='text-4xl text-gray-800 font-bold'>Producto Agregado</h1><BsCheck2 className='text-4xl text-gray-50 font-black'/></div></div>
    </div>
  )
}
