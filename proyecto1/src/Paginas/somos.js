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
      <h4 className='mb-3 texto-justificado'>Logística Integral</h4>
      <p className='texto-justificado'>En InnovAcción, ofrecemos soluciones logísticas integrales para empresas en busca de un socio confiable en el manejo de su cadena de suministro. Ya sea que necesites transporte eficiente, almacenaje seguro o servicios de consolidado y desconsolidado de carga, estamos aquí para simplificar y optimizar tus operaciones.
      </p>
      <p className='texto-justificado'>Trabajamos en estrecha colaboración con proveedores de servicios logísticos para garantizar que tus mercancías lleguen a su destino de manera oportuna y segura.
      </p>
      <h4 className='mb-3 texto-justificado'>Comercialización</h4>
      <p className='texto-justificado'>En InnovAcción, no solo ofrecemos servicios logísticos, sino que también somos tu fuente confiable para productos al por mayor y al detalle.
      </p>
      <p className='texto-justificado'>Desde insumos industriales hasta elementos de protección personal y artículos de escritorio, nuestro catálogo diverso satisface las necesidades de tu empresa.
      </p>
      <p className='texto-justificado'>La calidad y la variedad son nuestra prioridad, brindándote acceso a productos de primera clase para impulsar tu negocio al siguiente nivel.
      </p>
      <h4 className='mb-3 texto-justificado'>Servicios de ingeniería</h4>
      <p className='texto-justificado'>En el mundo de los negocios, la innovación es clave, y en InnovAcción, ofrecemos servicios de ingeniería para llevar tu empresa hacia el futuro. Ya sea que necesites apoyo en proyectos, asesoramiento para licitaciones, implementación de contratos mineros, análisis de proyectos o planificación estratégica, nuestro equipo de ingenieros altamente capacitados está listo para ayudarte.
      </p>
      <p className='texto-justificado'>Nos especializamos en el análisis y la optimización de procesos, proporcionándote las herramientas necesarias para alcanzar tus metas y explorar nuevas oportunidades de negocio.
      </p>
    </div>
  );
}

export default Somos;

