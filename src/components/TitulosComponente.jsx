import React from 'react'

export default function TitulosComponente({titulo,estilos}) {
  return (
   <h1 className={estilos}>{titulo}</h1>
  )
}
