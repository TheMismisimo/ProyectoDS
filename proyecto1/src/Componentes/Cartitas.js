import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Estilos/Cartitas.css";

// ... (previous imports and code)

function Cartitas() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
  
    const handleMouseEnter = (index) => {
      setHoveredIndex(index);
    };
  
    const handleMouseLeave = () => {
      setHoveredIndex(null);
    };
  
    const cardsData = [
      {
        title: "Logística Integral",
        subtitle: "Soluciones logísticas",
        description:
          "Soluciones logísticas integrales para empresas en busca de un socio confiable en el manejo de su cadena de suministro.",
      },
      {
        title: "Comercialización",
        subtitle: "Servicios logísticas",
        description:
          "Tu fuente confiable para productos al por mayor y al detalle.",
      },
    ];
  
    return (
      <Container>
        <h1 className="text-center mt-4 mb-5">Cartitas</h1>
        <Row className="justify-content-center">
          {cardsData.map((card, index) => (
            <Col
              key={index}
              md={4}
              sm={6}
              xs={12}
              className="mb-4"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <Card className={`hover-effect ${hoveredIndex === index ? "hovered" : ""}`}>
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{card.subtitle}</Card.Subtitle>
                  <Card.Text>{card.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
  
  export default Cartitas;
  