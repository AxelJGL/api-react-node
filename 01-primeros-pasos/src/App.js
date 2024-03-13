
import './App.css';
import MiComponente from './MiComponente';
import { SegundoComponente } from './SegundoComponente';
import { TercerComponente } from './TercerComponente';
import { EventosComponente } from './EventosComponente';
function App() {
  const ficha_medica = {
    altura: "173cm",
    grupo: "A+",
    estado: "bueno",
    alergias: "ninguna"
  };

  return (
    <div className='componentes'>
      <hr />
      <MiComponente />
      <hr />
      <SegundoComponente />
      <hr />
      <TercerComponente
        nombre="Axel"
        apellidos="Guerrero"
        ficha={ficha_medica}
      />
      <hr />
      <EventosComponente />
    </div>
  );
}


export default App;

