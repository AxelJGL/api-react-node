import React, { useState, useEffect } from 'react'

export const PruebasComponent = () => {

    const [usuario, setUsuario] = useState("Axel Javier")
    const [fecha, setFecha] = useState("01-01-1998")

    const modUsuario = (e) => {
        setUsuario(e.target.value);
    };

    const cambiarFecha = (e) =>{
        setFecha(Date.now());
    }

    //solo s eejecuta 1 vez, al cargar el componente
    useEffect(()=>{
        console.log("has cargado el effect")
    },[]);

    // se ejecuta solo si cambio el usuario
    useEffect(()=>{
        console.log("se modifica el usuaario")
    },[usuario]);

    return (
        <div>
            <h1>Use Effect</h1>
            <strong className='label'>{usuario}</strong>
            <strong>{fecha}</strong>
            <p>
                <input
                    type='text'
                    onChange={e => modUsuario(e)}
                    placeholder='Cambiar el nombre'
                />
                <button onClick={e=> cambiarFecha(e)}>cambio</button>
            </p>
        </div>
    )
}
