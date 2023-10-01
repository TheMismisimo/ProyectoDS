import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap
import { Carousel } from 'react-bootstrap';
import '../Estilos/Carrusel.css'

const Carrusel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-25 mx-auto"
          src="https://i.pinimg.com/564x/80/9b/25/809b2577c94c73588f2eebdd1804eae2.jpg"
          alt="Imagen 1"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-25 mx-auto"
          src="https://i.pinimg.com/564x/f4/17/16/f41716d65acb3d517fa427b74c3a8e4d.jpg"
          alt="Imagen 2"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-25 mx-auto"
          src="https://i.pinimg.com/564x/27/34/1d/27341d18902597797baf196d345ef830.jpg"
          alt="Imagen 3"
        />
      </Carousel.Item>
    </Carousel>
  );
}
  
  

export default Carrusel