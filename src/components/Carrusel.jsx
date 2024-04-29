import React, { useContext } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { DataContext } from "./data/DataProvider";
import { Link } from "react-router-dom";
export function Carrusel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  const { productos } = useContext(DataContext);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {productos
          .map((item) => (
            <div className="embla__slide" key={item._id}>
              <img src={item.image.url} />
             <div className="w-full flex flex-col gap-4">
             <span className="text-2xl text-slate-900 font-bold"> {item.nombre}</span>
            
             <span className="text-2xl text-slate-900 font-bold">$ {item.precio}</span>
             <Link  className="bg-rose-500 w-[100px] h-[40px]  py-2  flex justify-center items-center text-gray-50 uppercase font-medium rounded-md hover:bg-rose-700" to={`/details/${item.nombre}`}>Ver</Link>
             </div>
            </div>
          )).slice(0,5)
          }
      </div>
    </div>
  );
}
