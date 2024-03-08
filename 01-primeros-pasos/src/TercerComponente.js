import React from 'react'

export const TercerComponente = ({nombre, apellido, ficha}) => {

  return (
    <div>
        <h1>Comunicacion entre Componentes</h1>
        <ul>
            <li>{nombre}</li>
            <li>{apellido}</li>
            <li>{ficha.estado}</li>
        </ul>
    </div>
  )
}
