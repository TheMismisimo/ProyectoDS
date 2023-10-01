import QueSucede from "./Componentes/QueSucede";
import Carrusel from "./Componentes/Carrusel";

function retornarX(){
  return Math.trunc(Math.random()*10);
}


function App() 
{
  const siglo = 21
  const persona = {
    nombre: 'pepe',
    edad: 24
  }

  return (
    <div className="App">
      <QueSucede/>  
      <Carrusel/>
    </div>
  );
}

export default App;
