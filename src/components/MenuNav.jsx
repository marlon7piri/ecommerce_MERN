import React from 'react'
import { useContext } from 'react'
import {BiSearch} from 'react-icons/bi'
import {HiOutlineShoppingBag} from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { DataContext } from './data/DataProvider'

export default function MenuNav() {






  const{carrito}=useContext(DataContext);

  const longitud_carrito=carrito.length


  return (
    <div className='nav_container relative w-full  h-auto  ' >

<div className='nav  py-2 px-2 w-full  flex justify-between items-center fixed bg-gray-600 top-0 z-50'>
<div><h3 className='text-2xl text-rose-500 font-black'>Marlon</h3></div>

<ul className='flex gap-10 text-gray-50'>
  <li><Link to="/" className='links hover:text-rose-700'>Home</Link></li>
 
  <li><Link to="/productos" className='links hover:text-rose-700'>Products</Link></li>
  <li><Link className='links hover:text-rose-700'>Shop</Link></li>
  <li><Link to="/team" className='links hover:text-rose-700'>Team</Link></li>
</ul>


<div className='icons_nav flex gap-4 justify-center items-center relative mr-10'>
<BiSearch className='text-2xl text-gray-50  hover:cursor-pointer hover:text-rose-700'/>
<div className='relative flex justify-center items-center'>
<Link to="/carrito"><HiOutlineShoppingBag className='icon_store text-2xl text-gray-50 hover:cursor-pointer hover:text-rose-700 z-50'/></Link>
<span className='flex justify-center items-center absolute -right-2 -bottom-3 p-3 bg-red-900 text-white  rounded-full w-4 h-4 z-20'>{longitud_carrito}</span>
</div>
</div>

</div>




    </div>
  )
}
