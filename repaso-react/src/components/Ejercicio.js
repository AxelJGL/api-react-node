import React, { useState } from 'react'
import propTypes from 'prop-types'

export const Ejercicio = ({ año }) => {
    const [anio, setAnio] = useState(año)
    const [estadoAnio, setEstadoAnio] = useState("actual")
    let añoActual = año;

    const changeAño = (e, anio) => {
        switch (e.target.id) {
            case "añoAnterior":
                let añoAnterior = parseInt(anio) - 1
                if (añoAnterior === añoActual) {
                    setEstadoAnio("actual")
                }
                else {
                    setEstadoAnio("Anterior")
                }
                setAnio(anio - 1)
                break;
            case "input":
                if(Number.isInteger(anio)){
                    setAnio(parseInt(año))
                }
                else{
                    setAnio(parseInt(anio))
                }
                if(anio === añoActual){
                    setEstadoAnio("Actual")
                }
                else{
                    setEstadoAnio("")
                }

                break;
            case "añoSiguiente":
                let añoSiguiente = anio - 1
                if (añoSiguiente === añoActual) {
                    setEstadoAnio("actual")
                }
                else {
                    setEstadoAnio("Siguiente")
                }
                setAnio(parseInt(anio) + 1)
                break;
            default:
                break;
        }
    }

    return (
        <div>
            <h1>El año {estadoAnio} es: {anio}</h1>
            <br />
            <button id="añoAnterior" onClick={e => changeAño(e, anio)}>Año Anterior</button>
            <label>Digitar el Año: </label>
            <input
                id="input"
                type='number'
                onChange={e => changeAño(e, e.target.value)}
            />
            <button id="añoSiguiente" onClick={e => changeAño(e, anio)}>Año Siguiente</button>
        </div>
    )

}

Ejercicio.propTypes = {
    año: propTypes.number.isRequired
}
