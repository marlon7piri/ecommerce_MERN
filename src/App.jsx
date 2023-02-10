import React,{ useState } from 'react'


import './App.css'
import {DataProvider} from './components/data/DataProvider'
import Header from './components/Header'
import MenuNav from './components/MenuNav'

import Rutas from './components/routes/Rutas'
import Home from './pages/Home'


function App() {


  return (

    <div className="App">
   <DataProvider>
   <MenuNav />
    <Rutas/>
    </DataProvider>
    </div>

  
    


 
  )
}

export default App
