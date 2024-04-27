import React, { useContext, useEffect } from 'react'
import { DataContext } from './data/DataProvider';
import {FaSpinner} from 'react-icons/fa'
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

export default function CardPumas() {
  const { pumas,spinner,isloading} = useContext(DataContext);


  useEffect(()=>{

    spinner()
  },[])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
      },
    },
  };

  const itemImage = {
    hidden: { opacity: 0,scale:0 },
    show: { opacity: 1 ,scale:1 },
  };
  return pumas.map(item=>{
    return (
      <motion.div
      variants={container}
      initial="hidden"
      animate="show"
        className="w-full shadow-2xl shadow-black rounded-2xl overflow-hidden" 
        key={item.id}
      >
        <motion.div  variants={itemImage}
          className=""
        >
          <div className="w-full h-[400px]">
            {isloading ? (
              <img 
                src={item.imagen}
                alt="una imagen de zapatos"
                className="w-full h-full object-center object-cover"
              />
            ) : (
              <FaSpinner className="animate-spin text-3xl m-auto flex  items-center justify-center" />
            )}
          </div>
          <div className="p-2 ">
            <p className="p-2">
              para hacer el pedido tome un capture del producto que desea y
              envienlo{" "}
            
            </p>  <div className="flex   justify-center items-center"><BsArrowRight className="text-blue-600"/><a
                href="http://wa.me/+50766402250"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-700 p-2"
              >
                AQUI
              </a></div>
          </div>
        </motion.div>

        <div></div>
      </motion.div>
    );
  });
}
