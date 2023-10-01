import React, { useState } from "react";
import { Carousel, Button } from "react-bootstrap";

function Carrusel() {
    const [imagenes, setImagenes] = useState([
        {
          src: "https://github.com/TheMismisimo/ProyectoDS/blob/81b55415c954a56cf8f10719af49eed3f41880fb/proyecto1/src/Imagenes/martillo.jpg",
          alt: "Imagen 1",
        },
        {
          src: "https://github.com/TheMismisimo/ProyectoDS/blob/81b55415c954a56cf8f10719af49eed3f41880fb/proyecto1/src/Imagenes/mas1.jpg",
          alt: "Imagen 2",
        },
        {
          src: "https://github.com/TheMismisimo/ProyectoDS/blob/81b55415c954a56cf8f10719af49eed3f41880fb/proyecto1/src/Imagenes/myd.jpg",
          alt: "Imagen 3",
        },
      ]);

    const siguienteImagen = () => {
    const indiceActual = imagenes.findIndex((imagen) => imagen.src === document.querySelector(".carousel-item.active img").src);
    const indiceSiguiente = (indiceActual + 1) % imagenes.length;

    setImagenes([...imagenes, imagenes.splice(indiceActual, 1)[0]]);
    };

    const anteriorImagen = () => {
        const indiceActual = imagenes.findIndex((imagen) => imagen.src === document.querySelector(".carousel-item.active img").src);
        const indiceAnterior = (indiceActual - 1 + imagenes.length) % imagenes.length;

        setImagenes([...imagenes, imagenes.splice(indiceAnterior, 1)[0]]);
    };
    
    return (
        <div className="container">
          <Carousel>
            {imagenes.map((imagen, indice) => (
              <Carousel.Item key={indice}>
                <img src={imagen.src} alt={imagen.alt} />
              </Carousel.Item>
            ))}
          </Carousel>
          <Button onClick={anteriorImagen}>Anterior</Button>
          <Button onClick={siguienteImagen}>Siguiente</Button>
        </div>
      );
}

export default Carrusel