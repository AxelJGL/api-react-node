import React, { useState } from 'react'

export const MiPrimerEstado = () => {
    /* 
    problematica 
    let nombre = "Axel Javier Guerrero Lopez";

    const cambiarNombre = (e) => {
        try {
            nombre = "Zanseith";
        }
        catch (error) {
            throw error;
        }
    }
*/
    const [nombre, setNombre] = useState("Axel Javier Guerrero Lopez");

    const cambiarNombre = (e, nombreFijo) => {
        setNombre(nombreFijo)
    }

    return (
        <div>
            <h3>Componente: Mi primer estado</h3>
            <strong className='label'>
                {nombre}
            </strong>
            <br />
            <button onClick={e => cambiarNombre(e, "Zanseith")}>Cambiar Nombre por Zansieth</button>
            <hr/>
            <p id="nombre">{nombre}</p>
            <input
             type='text'
             placeholder='Cambiar Nombre'
             onChange={e=> cambiarNombre(e, e.target.value)}
             />
        </div>
    )
} // end component