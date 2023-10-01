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
      <p>Esta es la pagina de inicio de la empresa God tier sa</p>
    </div>
  );
}

export default App;
