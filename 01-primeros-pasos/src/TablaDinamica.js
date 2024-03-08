import React from 'react';
import './TablaDinamica.css';

const TablaDinamica = ({ data }) => {
  const { columnas, rows } = data;

  return (
    <table className="tabla-dinamica">
      <thead>
        <tr>
          {Object.values(columnas).map((columna, index) => (
            <th key={index}>{columna}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Object.keys(rows).map((filaKey) => (
          <tr key={filaKey}>
            {Object.values(rows[filaKey]).map((dato, index) => (
              <td key={index}>{dato}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablaDinamica;