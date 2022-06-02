import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './aboutherostyle.css';


function abouthero() {
  return (
    <div id="abouthero"  >
      <Container >
        <Row>
          <Col>
          <h5>
            <span style={{color:"#285484"}}>Home</span> / About
          </h5>
           <p>
           About
           </p>
               
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default abouthero;
