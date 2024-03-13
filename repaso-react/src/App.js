import logo from './logo.svg';
import './App.css';
import { Ejercicio } from './components/Ejercicio';

function App() {

  const getAnio = () => {
    const fechaActual = new Date();
    const añoActual = fechaActual.getFullYear();
    return añoActual
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Esto es React</h1>
        <Ejercicio año={getAnio()} />
      </header>
    </div>
  );
}

export default App;
