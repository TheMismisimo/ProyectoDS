import Carrusel from "./Componentes/Carrusel";
import BarraNav from "./Componentes/BarraNav";
import { useState, useEffect } from 'react';

function App() {
  const [articulos, setArticulos] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/1/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setArticulos(data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <div className="App">
      <BarraNav />
      {error ? (
        <p className="mb-5">Error: {error.message}</p>
      ) : (
        <div>
          <h2>Detalles del personaje:</h2>
          <p>Nombre: {articulos ? articulos.name : 'Cargando...'}</p>
          <p>Status: {articulos ? articulos.status : 'Cargando...'}</p>
          <p>Especie: {articulos ? articulos.species : 'Cargando...'}</p>
          <p>Origen: {articulos ? articulos.origin.name : 'Cargando...'}</p>
          <p>Género: {articulos ? articulos.gender : 'Cargando...'}</p>
          <p>Tipo: {articulos ? articulos.type : 'Cargando...'}</p>
          <p>Ubicación: {articulos ? articulos.location.name : 'Cargando...'}</p>
          <p>Episodios: {articulos ? articulos.episode.length : 'Cargando...'}</p>
          {/* Agrega más campos según sea necesario */}
        </div>
      )}
      <Carrusel />
      <p>Esta es la página de inicio de la empresa God tier sa</p>
    </div>
  );
}

export default App;






