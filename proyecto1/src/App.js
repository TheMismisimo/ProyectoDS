import Carrusel from "./Componentes/Carrusel";
import BarraNav from "./Componentes/BarraNav";
import Cartitas from "./Componentes/Cartitas";
import "./Estilos/Fondo.css"
import './Estilos/Justificado.css'



function App() 
{

  return (
    <div className="App">
      <BarraNav/>
      <p className="mb-5"></p>
      <Carrusel/>
      <p className="texto-justificado">¡Bienvenidos a InnovAcción!</p>
      <Cartitas/>
    </div>
  );
}

export default App;
