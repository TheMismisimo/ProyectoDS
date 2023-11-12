import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap
import BarraNav from "../Componentes/BarraNav";
import "../Estilos/Fondo.css";
import LectorApi from '../Componentes/LectorApi';


function Galeria() {
  return (
    <div>
      <BarraNav/>
      <h1>Nuestra galeria</h1>
      
      <LectorApi/>
    </div>
    
  )
}

export default Galeria