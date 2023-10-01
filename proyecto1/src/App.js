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
        <p>QUE PASA HIJOS DE LA CORNETA CHUPENLA</p>
        <p>El v... succiona {siglo} o {retornarX()} toneladas de D</p>


      </header>
    </div>
  );
}

export default App;
