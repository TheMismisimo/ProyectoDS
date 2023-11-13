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
      <p className="texto-justificado">Descubre cómo InnovAcción puede transformar tu enfoque logístico, abastecimiento y estrategias de ingeniería.</p>
      <p className="texto-justificado">¡Contacta con nosotros hoy para iniciar una nueva era de innovación y acción en tu empresa!</p>
    </div>
  );
}

export default App;
