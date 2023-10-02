import React from 'react'

function BarraNav() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">InnovAcción</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link" href='/somos'>Somos</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/nosotros">Nosotros</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/galeria">Galeria</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/contactos">Contactos</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default BarraNav