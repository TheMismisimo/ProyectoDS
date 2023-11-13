import Carrusel from "./Componentes/Carrusel";
import BarraNav from "./Componentes/BarraNav";
import Cartitas from "./Componentes/Cartitas";
import ElFooter from "./Componentes/ElFooter";
import "./Estilos/Fondo.css"
import './Estilos/Justificado.css'



function App() 
{

  return (
    <div className="App">
      <BarraNav/>
      <Carrusel/>
      <Cartitas/>
      <ElFooter/>
    </div>
  );
}

export default App;
