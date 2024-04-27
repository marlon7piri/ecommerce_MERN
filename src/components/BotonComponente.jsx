import React from 'react'

export default function BotonComponente({nombre,estilos,funcion}) {
  return (
    <button className={estilos} onClick={funcion}>{nombre}</button>
  )
}
