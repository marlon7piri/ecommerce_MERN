import React from 'react'
import {MdLibraryBooks} from 'react-icons/md'
import {MdAttachMoney} from 'react-icons/md'


export default function MasInfo() {
  return (
    <div className='w-full py-24' id="informaciondepago">
      <h1 className='lg:text-6xl sm:text-4xl  text-center font-bold text-gray-900'>Información</h1>
      <div className=' w-full flex justify-center items-center p-3'>
        <MdLibraryBooks  className='text-2xl text-gray-900'/>
        <MdAttachMoney  className='text-2xl text-gray-900'/>
      </div>
      <p className='p-3 min-w-[300px] w-[80%]  lg:text-center sm:text-left m-auto text-2xl'>Los pagos se pueden realizar por yappy y tendra facilidad de pago al poder pagar en dos pagos, uno de abono inicial y el otro despues que tenga el pedido en sus manos, somos una tienda que lleva vendiendo hace mas de 4 años en todo Panama y en la cual puede estar 100% seguro de que recibira el producto solicitado</p>
    </div>
  )
}
