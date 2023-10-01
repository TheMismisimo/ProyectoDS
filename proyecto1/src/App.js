import logo from './logo.svg';
import './App.css';

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
      <header className="App-header">
        <p>Nuestra pagina del proyecto</p>
        <p> tamos usando github wiiii x2</p>


      </header>
    </div>
  );
}

export default App;
