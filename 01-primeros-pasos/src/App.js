import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import { SegundoComponente } from './SegundoComponente';
import { TercerComponente } from './TercerComponente';
import TablaDinamica from './TablaDinamica';

function App() {
  const ficha_medica = {
    altura: "173cm",
    grupo: "A+",
    estado: "bueno",
    alergias: "ninguna"
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Test react
        </p>
        <div className='componentes'>
          <hr />
          <MiComponente />
          <hr />
          <SegundoComponente />
          <hr />
          <TercerComponente
            nombre="Axel"
            apellido="Guerrero"
            ficha={ficha_medica}
          />
        </div>
      </header>
    </div>
  );
}

function DynamicTable() {
  const tabla_dinamica = {
    columnas: {
      columna1: "Auditoria",
      columna2: "Etapa",
      columna3: "Fase",
      columna4: "Folio"
    },
    rows: {
      row1: {
        col1: "Auditoria 1",
        col2: "Revision",
        col3: "1",
        col4: "2024-A1038",
      },
      row2: {
        col1: "Auditoria 2",
        col2: "Revision",
        col3: "2",
        col4: "2024-A1324",
      }
    }
  }
  return (
    <div className="testing" style={{display: "none"}}>
      <hr />
      <p>Testing Area</p>
      <TablaDinamica data={tabla_dinamica} />
      <hr />
    </div>
  )
}

export {App, DynamicTable};

