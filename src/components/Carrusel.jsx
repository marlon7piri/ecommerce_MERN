import React, { useContext } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { DataContext } from "./data/DataProvider";
export function Carrusel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  const { productos } = useContext(DataContext);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
      <img  className="embla__slide" src="https://res.cloudinary.com/dxi9fwjsu/image/upload/v1672785037/handbag-leather-michael-kors-tote-bag-women-bag-6e5b7c411ea6b17f42044b5fcf5c53e3_slfy9o.png" />
      <img  className="embla__slide" src="https://res.cloudinary.com/dxi9fwjsu/image/upload/v1672784922/handbag-leather-tote-bag-messenger-bag-women-s-handbags-14dc442078c8d78e6025e7ddba6f1892_wfuggp.png" />
      <img  className="embla__slide" src="https://res.cloudinary.com/dxi9fwjsu/image/upload/v1672784928/handbag-messenger-bag-leather-tote-bag-women-s-handbags-d4d778acc3112d7686847ea2b6bc0f83_gobnz1.png" />
        
      </div>
    </div>
  );
}
