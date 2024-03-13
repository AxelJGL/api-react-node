import React from 'react'

export const EventosComponente = () => {
    return (
        <div>
            <h1>Eventos en react</h1>
            {/*evento Click*/}
            <button onClick={e => hasDadoClick(e, "axel")}>Evento Click</button>

            {/*evento doble Click*/}
            <button onDoubleClick={e => hasDadoDobleClick(e)}>Evento doble Click</button>
            {/*on mouse enter on mouse leave */}
            <div id='caja'
                onMouseEnter={e => onMouseEnter(e, "entrado")}
                onMouseLeave={e => onMouseEnter(e, "salido")}
            >
                <p>Pasa por encima</p>
            </div>
            <p>
                <label>Nombre: </label>
                <br />
                <input id="input1"
                    type='text'
                    placeholder="Introduce tu nombre"
                    onFocus={e => onFocus(e, "nombre")}
                    onBlur={e => onBlur(e, "nombre")}
                />
            </p>
        </div >
    )
}

const hasDadoClick = (e, nombre) => {
    alert("se dio click: " + nombre);
}

const hasDadoDobleClick = (e) => {
    alert("has dado doble click");
}

const onMouseEnter = (e, accion) => {
    console.log("Has: " + accion);
}

const onFocus = (e, input) => {
    console.log("focus al input de : " + input)
}

const onBlur = (e, input) => {
    console.log("saliendo del input:" + input)
}