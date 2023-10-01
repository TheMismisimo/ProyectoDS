import QueSucede from "./Componentes/QueSucede";


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
    </div>
  );
}

export default App;
