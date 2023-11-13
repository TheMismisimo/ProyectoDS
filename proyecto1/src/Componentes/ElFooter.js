import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../Estilos/BarraNav.css';
import '../Estilos/Justificado.css'


function ElFooter() {
  return (
    <footer className="bg-custom color-blanco text-center py-0 mt-5 fixed-bottom">
      <p className="copyright">© 2023 InnovAcción. All Rights Reserved.</p>
    </footer>
  )
}

export default ElFooter