import React, { useState, useEffect } from 'react';
import axios from 'axios';

function LectorApi() {

  const [images, setImages] = useState([]);

  useEffect(() => {
    const imageIds = ['BNBA1h-NgdY', 'Hcfwew744z4', 'VBLHICVh-lI', 'e6n7uoEnYbA']; // Reemplaza con las ID reales de las imágenes que deseas buscar
    const apiKey = '8F4i9cjH6Yd7fYGMeVRK2Lr3_04AXf2BuGkC6fNTFRM';
  
    const fetchImageDetails = async (imageId) => {
      try {
        const response = await axios.get(`https://api.unsplash.com/photos/${imageId}`, {
          params: {
            client_id: apiKey,
          },
        });

        return response.data;
      } catch (error) {
        console.error(`Error al obtener detalles de la imagen con ID ${imageId}:`, error);
        return null;
      }
    };

    const fetchImages = async () => {
      try {
        const imagePromises = imageIds.map(async (imageId) => {
          return await fetchImageDetails(imageId);
        });

        const imageDetails = await Promise.all(imagePromises);
        setImages(imageDetails.filter(image => image !== null));
      } catch (error) {
        console.error('Error al obtener imágenes de Unsplash:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      <div className='row justify-content-center'>
        {images.map((image, index) => (
          <div className={`col-lg-4 col-md-12 mb-4 mb-lg-0 ${index % 2 === 0 ? 'mx-4' : ''}`}>
            <img
            key={image.id}
            src={image.urls.small}
            alt={image.alt_description}
            className="w-100 shadow-1-strong rounded"
            onClick={() => window.open(image.links.html)} // Abre la imagen en una nueva pestaña al hacer clic
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default LectorApi;