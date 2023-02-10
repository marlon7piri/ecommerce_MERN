import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Carrito from '../../pages/Carrito'
import Createproduct from '../../pages/Createproduct'
import Details from '../../pages/Details'


import Home from '../../pages/Home'
import Productos from '../../pages/Productos'

import Team from '../../pages/Team'

export default function Rutas() {
  return (
   <Routes>
 <Route exact path="/productos" element={<Productos/>}/>
<Route  path="/new/" element={<Createproduct/>}/>
<Route  path="/new/:id" element={<Createproduct/>}/>
<Route exact path="/carrito" element={<Carrito/>}/>
<Route exact path="/team" element={<Team/>}/>

<Route exact path="/details/:producto" element={<Details/>}/>
<Route exact path="/" element={<Home/>}/>


   </Routes>
  )
}
