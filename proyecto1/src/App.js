import Carrusel from "./Componentes/Carrusel";
import BarraNav from "./Componentes/BarraNav";
import{useState, useEffect} from 'react';



function App() 
{
  const [articulos, setArticulos] = useState([]);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setArticulos(data);
      });
  }, []);
  

  return (
    <div className="App">
      <BarraNav />
      <p className="mb-5">Nombre del personaje: {articulos.name || 'Cargando...'}</p>
      <Carrusel />
      <p>Esta es la página de inicio de la empresa God tier sa</p>
    </div>
  );
  
}  
export default App;
