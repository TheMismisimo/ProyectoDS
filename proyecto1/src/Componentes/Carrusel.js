import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap
import { Carousel } from 'react-bootstrap';
import '../Estilos/Carrusel.css'

const Carrusel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 mx-auto"
          src="fotocarrusel1.png"
          alt="Imagen 1"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 mx-auto"
          src="fotocarrusel2.png"
          alt="Imagen 2"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 mx-auto"
          src="fotocarrusel3.png"
          alt="Imagen 3"
        />
      </Carousel.Item>
    </Carousel>
  );
}
  
  

export default Carrusel