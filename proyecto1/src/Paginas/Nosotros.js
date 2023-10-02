import React from 'react'
import BarraNav from "../Componentes/BarraNav";
import '../image001.png'

function Nosotros() {
  return (
    <div>
      <BarraNav/>
      <div className='mb-5'>
        <h1>Sobre Nosotros</h1>
      </div>
      <div >
        <p className='justify-content-between'>Ser la empresa líder en el desarrollo y aplicación de soluciones integrales de ingeniería, logística y comercialización a nuestros clientes para contribuir a su competitividad y al progreso social.</p>
        <p className='justify-content-between'>Equipo:</p>
        <p className='justify-content-between'>Gerencia General: Ricardo Meneses</p>

        <p className='justify-content-between'>Gerencia de Operaciones: Rafael Urbina</p>

        <p className='justify-content-between'>Gerencia de Personas: Jéssica Araya</p>

        <p className='justify-content-between'>Gerencia de Ingeniería: María Polanco</p>

        <p className='justify-content-between'>Gerencia de Seguridad: Bowie Bernardo</p>
      </div>
      <div className='mb-5'>
        <img src='../image001.png' alt='organigrama' className='img-fluid'></img>
      </div>
    </div>
  )
}

export default Nosotros