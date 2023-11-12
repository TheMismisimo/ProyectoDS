import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../Estilos/BarraNav.css';
import { Link } from 'react-router-dom';

function BarraNav() {
  return (
    <div className='mb-3'>
        <nav class="navbar navbar-expand-lg bg-custom">
            <div class="container-fluid" >
                <Link class="navbar-brand" to='/'>InnovAcción</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <Link class="nav-link" to='/somos'>Somos</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to='/nosotros'>Nosotros</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to='/galeria'>Galeria</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to='/contactos'>Contactos</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default BarraNav