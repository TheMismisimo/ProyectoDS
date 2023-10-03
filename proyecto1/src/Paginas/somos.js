import React, { useState, useEffect } from 'react';
import BarraNav from "../Componentes/BarraNav";

function Somos() {
  const [personaje, setPersonaje] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Realizar la solicitud a la API de Rick and Morty
    fetch('https://rickandmortyapi.com/api/character/1')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setPersonaje(data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <div>
      <BarraNav />
      <h1 className='mb-5'>¿Quiénes somos?</h1>
      <p className='justify-content-between'>
        Somos una empresa dedicada a servicios integrales, de logística, ingeniería y comercialización, nos dedicamos a apoyar a nuestros clientes, dándoles soluciones innovadoras, oportunas y que agregan valor a sus propias actividades, somos su mayor aliado y el apoyo que necesitan.
      </p>
      {error ? (
        <p>Error: {error.message}</p>
      ) : (
        personaje && (
          <div>
            <h2>Información del personaje:</h2>
            <p>Nombre: {personaje.name}</p>
            <p>Status: {personaje.status}</p>
            <p>Especie: {personaje.species}</p>
            <p>Tipo: {personaje.type}</p>
            <p>Género: {personaje.gender}</p>
            <p>Origen: {personaje.origin.name}</p>
            <p>Ubicación: {personaje.location.name}</p>
            <p>Episodios:</p>
            <ul>
              {personaje.episode.map((episodeUrl, index) => (
                <li key={index}>
                  <a href={episodeUrl} target="_blank" rel="noopener noreferrer">
                    Episodio {index + 1}
                  </a>
                </li>
              ))}
            </ul>
            <img src={personaje.image} alt={personaje.name} />
            <p>Fecha de creación: {personaje.created}</p>
            <p>ID: {personaje.id}</p>
          </div>
        )
      )}
    </div>
  );
}

export default Somos;

