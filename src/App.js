import './App.css';
import { Comp4 } from './components/Comp4';
import { Componente1 } from './components/Componente1';
import Componente2 from './components/Componente2';
import Componente3 from './components/Componente3';
import Componente4 from './components/Componente4';
import Componente5 from './components/Componente5';
import Componente6 from './components/Componente6';
import Componente7 from './components/Componente7';
import { Comp2 } from './components/comp2';
import { Comp3 } from './components/comp3';
import Componente8 from './components/Componente8';

function App() {
  let mensaje  = "Hola  mundo react "
   return (
    <div className="App">
      <header className="App-header">
        <p>
          {mensaje}
        </p>
        <Componente8/>
        

      </header>
      
    </div>
  );
}

export default App;



