// Imports
import React from 'react'

export const SegundoComponente = () => {
    const libros = ["watchmen", "JJK", "Guia de React"];
    //const libros = [];
    return (
        <div>
            <h1>Listado de Libros</h1>
            {/*Se Revisa si el array esta vacio*/}
            {libros.length >= 1 ? (
                //Si el Array contiene datos se itera sobre el array
                <ul>
                    {
                        // Se necesita usar la funcion map y asi mismo pasar el indice de del array a la propiedad key
                        libros.map((libro, indice) => {
                            let idUl = "libro" + indice;
                            return <li id={idUl} key={indice}>{libro}</li>
                        })
                    }
                </ul>
            )
                //Fin de la condicion
                // comienza else en el caso de que el array venga vacio
                : (
                    <p>No hay libros</p>
                )
            }
        </div>
    )
}
