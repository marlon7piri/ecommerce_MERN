import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { masvendidos } from "./data/data.js";

export default function CardMotion() {
  const carrusel = useRef();
const [width, setWidth] = useState(0);

useEffect(() => {
/* console.log(carrusel.current.scrollWidth,carrusel.current.offsetWidth); */
setWidth(carrusel.current.scrollWidth - carrusel.current.offsetWidth)
}, [])

  return (

    <div  id="masvendidos" className=" h-full my-24">  
    <h1 className='lg:text-6xl sm:text-4xl text-center text-gray-900 my-8 font-bold'>Mas Vendidos</h1>
    <motion.div className="container_motion cursor-grabbing overflow-hidden w-[100%] m-auto" ref={carrusel}>
      <motion.div
        className="container_interno flex "
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
      >
        {masvendidos.map((item) => {
          return (
            <motion.div className="item w-[350px] h-min-[300px] p-4"   key={item.id}>
              <img
                src={item.imagen}
                alt=""
                className="w-full h-[400px]  min-w-[300px] rounded-md object-cover pointer-events-none "
            />
            </motion.div>
          );
        })}
      </motion.div>
      
    </motion.div>
    </div>
  );
}


