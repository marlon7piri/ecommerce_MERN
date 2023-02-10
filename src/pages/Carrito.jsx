import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../components/data/DataProvider'
import {RiDeleteBin5Fill} from 'react-icons/ri'
import {BsCheck2} from 'react-icons/bs'

export default function Carrito() {

  const{carrito,deleted,total}=useContext(DataContext)

  const Total = total.toFixed(2)
  return (
    <div className='flex flex-col gap-10 justify-center items-center m-auto mt-40'>

      <h1 className='text-center text-6xl font-black text-gray-900'>Tu Carrito</h1>
<div>
  
  {carrito ==0 ? (<h1 className='text-3xl font-black text-gray-900'>No hay productos en su carrito</h1>):""}
  
  </div>
{carrito.map(e=>{




return(

<div key={e._id} className=' w-[500px] bg-gray-300 h-[100px] flex items-center justify-center gap-10 p-4 rounded-lg'> 
 <img src={e.imagen} alt="" className='w-[100px] h-[100px] object-cover block'/>
  <p>{e.nombre}</p>
  <p className='font-black'>${e.precio}</p>
<button onClick={()=>{deleted(e._id)}} className="bg-red-600 text-gray-50 rounded-md font-bold p-4 hover:bg-red-400"><RiDeleteBin5Fill/></button>

</div>)
})}

<div className='mensaje fixed top-40 bottom-0 left-[40%] bg-gray-300 w-max h-max z-50 flex justify-center items-center m-auto rounded-lg'><div className='flex justify-center items-center gap-3 bg-gray-400 p-4 rounded-md'><h1 className='text-4xl text-gray-50 font-bold'>Producto Eliminado</h1><BsCheck2 className='text-4xl text-gray-50 font-black'/></div></div>
<div><h2 className='text-3xl text-gray-900 font-black'>Total:<span className='ml-2'>${Total}</span></h2></div>



    </div>
  )
}
