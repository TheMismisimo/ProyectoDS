import Carrusel from "./Componentes/Carrusel";
import BarraNav from "./Componentes/BarraNav";
import "./Estilos/Fondo.css"



function App() 
{

  return (
    <div className="App">
      <BarraNav/>
      <p className="mb-5"></p>
      <Carrusel/>
      <p>Esta es la pagina de inicio de la empresa InnovAcción</p>
    </div>
  );
}

export default App;
