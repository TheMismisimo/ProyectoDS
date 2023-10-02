import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap
import { Modal, Button } from 'react-bootstrap'; // Importa los componentes de react-bootstrap
import BarraNav from "../Componentes/BarraNav";


function Contactos() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    asunto: '',
    mensaje: '',
  });
  const [showModal, setShowModal] = useState(false); // Estado para mostrar/ocultar el modal

  const handleChange = (e) =>{
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const saveData = () =>{
    localStorage.setItem('contactos', JSON.stringify(formData));
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    saveData();
    setShowModal(true);
  };
  const handleClose = () =>{
    setShowModal(false);
  };
  return (
    <div>
      <BarraNav/>
      <div className="container">
        <h1 className='mb-4'>Contactanos</h1>
        <h5>Escriba sus datos:</h5>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Nombre y apellido
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Correo electrónico
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="asunto" className="form-label">
              Asunto
            </label>
            <textarea
              className="form-control"
              id="asunto"
              name="asunto"
              value={formData.asunto}
              onChange={handleChange}
              rows="1"
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="mensaje" className="form-label">
              Mensaje
            </label>
            <textarea
              className="form-control"
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </form>
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Datos enviados</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Nombre: {formData.name}</p>
            <p>Correo electrónico: {formData.email}</p>
            <p>Asunto: {formData.asunto}</p>
            <p>Mensaje: {formData.mensaje}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  )
}

export default Contactos