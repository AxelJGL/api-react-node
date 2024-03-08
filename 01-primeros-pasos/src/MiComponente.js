// Importar modulos de react o despendencias
import React from "react";

// Funcion del componente
const MiComponente = () => {
    let usuario = {
        nombre: "Axel",
        apellido: "Guerrero",
        edad: 22
    };
    return (
        <div>
            <h1>Test de Jsx</h1>
            <p>Nombre: {usuario.nombre} {usuario.apellido}</p>
            <p>Edad: {usuario.edad}</p>
        </div>

    );
};
// Export
export default MiComponente;