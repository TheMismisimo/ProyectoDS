import React from 'react'
import BarraNav from "../Componentes/BarraNav";
import "../Estilos/Fondo.css";
import '../Estilos/Justificado.css'
import ElFooter from '../Componentes/ElFooter';


function Nosotros() {
  return (
    <div>
      <BarraNav/>
      <div className='mb-5'>
        <h1>Sobre Nosotros</h1>
      </div>
      <div>
        <p className='texto-justificado'>Ser la empresa líder en el desarrollo y aplicación de soluciones integrales de ingeniería, logística y comercialización a nuestros clientes para contribuir a su competitividad y al progreso social.</p>
        <p className='texto-justificado'>Equipo:</p>
        <p className='texto-justificado'>Gerencia General: Ricardo Meneses</p>

        <p className='texto-justificado'>Gerencia de Operaciones: Rafael Urbina</p>

        <p className='texto-justificado'>Gerencia de Personas: Jéssica Araya</p>

        <p className='texto-justificado'>Gerencia de Ingeniería: María Polanco</p>

        <p className='texto-justificado'>Gerencia de Seguridad: Bowie Bernardo</p>
      </div>
      <div className='mb-5'>
        <img src='image001.jpg' alt='organigrama' className='d-block w-25 mx-auto'></img>
      </div>
      <ElFooter/>
    </div>
  )
}

export default Nosotros