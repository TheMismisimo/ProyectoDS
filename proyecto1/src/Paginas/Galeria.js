import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap
import BarraNav from "../Componentes/BarraNav";



function Galeria() {
  return (
    <div>
      <BarraNav/>
      <h1>Nuestra galeria</h1>
      <div class="row">
        <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <div class="mb-4 mx-4">
            <img
              src="https://cdn.pixabay.com/photo/2018/03/10/12/00/teamwork-3213924_1280.jpg"
              class="w-100 shadow-1-strong rounded "
              alt="Choque de puños"
            />
          </div>

          <div class="mb-4 mx-4">
            <img
              src="https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_1280.jpg"
              class="w-100 shadow-1-strong rounded"
              alt="Reunion"
            />
          </div>
        </div>

        <div class="col-lg-4 mb-4 mb-lg-0">
          <div class="mb-4 mx-4">
            <img
              src="https://cdn.pixabay.com/photo/2015/01/08/18/26/man-593333_1280.jpg"
              class="w-100 shadow-1-strong rounded"
              alt="Toma de datos"
            />
          </div>

          <div class="mb-4 mx-4">
            <img
              src="https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg"
              class="w-100 shadow-1-strong rounded"
              alt="Apuntes grupales"
            />
          </div>
        </div>
      </div>

    </div>
    
  )
}

export default Galeria