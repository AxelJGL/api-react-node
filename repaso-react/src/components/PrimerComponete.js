import React, { useState } from 'react'

export const PrimerComponete = () => {

    let cursos = ["curso1", "curso2", "curso3"]
    const [nombre, setNombre] = useState("Axel Javier");
    const [miWbe, setWeb] = useState("HTTPS")
    const cambiarNombre = (e, nuevoNombre) => {
        setNombre(nuevoNombre)
    }
    const cambiarWeb = (e, nuevaWeb) => {
        setWeb(nuevaWeb);
    }
    return (
        <div>
            <p className={nombre.length >= 4 ? 'verde' : 'rojo'}> <strong>{nombre}</strong></p>
            <p>{miWbe}</p>
            <ul>
                {cursos.map((curso, indice) => {
                    return (
                        <li key={indice}>{curso}</li>
                    )
                })}
            </ul>
            <button onClick={e => cambiarNombre(e, "Zanseith")}>Cambiar nombre</button>
            <button onClick={e => cambiarWeb(e, "HTTP")}>Cambiar Web</button>
            <button onClick={e => { alert("estado actual es: " + nombre) }}>Revisar Estado</button>
            <input
                type='text'
                placeholder='Coloca tu nombre'
                onChange={e => cambiarNombre(e, e.target.value)}
            />
        </div>

    )
}
