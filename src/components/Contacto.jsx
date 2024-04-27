import React from 'react'
import TitulosComponente from './TitulosComponente'
import {BsWhatsapp} from 'react-icons/bs'
import {AiOutlineInstagram} from 'react-icons/ai'

export default function Contacto() {
  return (
    <div className='w-full h-full bg-[#00a8ff] text-gray-900 py-14' id="contacto">

<TitulosComponente titulo="Contacto" estilos="font-black lg:text-6xl sm:text-4xl text-center mb-4"/>

<div className='flex justify-evenly'>

  <div className='flex justify-center items-center gap-2'>
    <BsWhatsapp className='text-gray-900 text-3xl'/>
    <a href="http://wa.me/+50766402250" target={'_blank'} className="hover:text-gray-50 transition duration-500">WhatsApp</a>
  </div>
{/*   <div  className='flex justify-center items-center gap-2'><AiOutlineInstagram  className='text-gray-900 text-3xl'/>
  <a href="https://instagram.com/marlon77_rodriguez" target={'_blank'} className="hover:text-gray-50 transition duration-500">Instagram</a></div> */}
 
</div>
    </div>
  )
}
