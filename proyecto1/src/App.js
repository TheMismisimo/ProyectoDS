import Carrusel from "./Componentes/Carrusel";
import BarraNav from "./Componentes/BarraNav";
import{useState, useEffect} from 'react';



function App() 
{

  return (
    <div className="App">
      <BarraNav/>
      <p className="mb-5"></p>
      <Carrusel/>
      <p>Esta es la pagina de inicio de la empresa God tier sa</p>
    </div>
  );
}

export default App;





  const[data, setData]= useState([])

  useEffect(() =>{
    fetch('https://scratchya.com.ar/react/datos.php')
    .then((Response)=>{
      return Response.json()
    })
    .then((articulos)=>{
      setArticulos(articulos)
    })
  },[])
