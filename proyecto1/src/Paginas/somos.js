import React from 'react';
import BarraNav from "../Componentes/BarraNav";
import "../Estilos/Fondo.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Estilos/Justificado.css'

function Somos() {
 
  return (
    <div>
      <BarraNav/>
      <h1 className='mb-5'>¿Quiénes somos?</h1>
      <p className='texto-justificado'>
        Somos una empresa dedicada a servicios integrales, de logística, ingeniería y comercialización, nos dedicamos a apoyar a nuestros clientes, dándoles soluciones innovadoras, oportunas y que agregan valor a sus propias actividades, somos su mayor aliado y el apoyo que necesitan.
      </p>
    </div>
  );
}

export default Somos;

