import Carrusel from "./Componentes/Carrusel";
import BarraNav from "./Componentes/BarraNav";
import Cartitas from "./Componentes/Cartitas";
import "./Estilos/Fondo.css"



function App() 
{

  return (
    <div className="App">
      <BarraNav/>
      <p className="mb-5"></p>
      <Carrusel/>
      <p>¡Bienvenidos a InnovAcción!</p>
      <Cartitas/>
    </div>
  );
}

export default App;
