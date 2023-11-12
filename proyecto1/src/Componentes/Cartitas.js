import "../Estilos/Cartitas.css";
import React from "react";

function Cartitas() {
  return (
    <div>
      <h1>Cartitas</h1>

      <div className="wrapper">
        <div className="cols">
          <div className="col" onTouchStart={() => this.classList.toggle("hover")}>
            <div className="container">
              <div
                className="front"
                style={{ backgroundImage: "url(https://unsplash.it/500/500/)" }}
              >
                <div className="inner">
                  <p>Logística Integral</p>
                  <span>Soluciones logísticas</span>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>
                    Soluciones logísticas integrales para empresas en busca de un
                    socio confiable en el manejo de su cadena de suministro.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col" onTouchStart={() => this.classList.toggle("hover")}>
            <div className="container">
              <div
                className="front"
                style={{ backgroundImage: "url(https://unsplash.it/500/500/)" }}
              >
                <div className="inner">
                  <p>Comercialización</p>
                  <span>Servicios logísticas</span>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>
                    Tu fuente confiable para productos al por mayor y al detalle.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col" onTouchStart={() => this.classList.toggle("hover")}>
            <div className="container">
              <div
                className="front"
                style={{ backgroundImage: "url(https://unsplash.it/500/500/)" }}
              >
                <div className="inner">
                  <p>Comercialización</p>
                  <span>Servicios logísticas</span>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>
                    Tu fuente confiable para productos al por mayor y al detalle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cartitas;
