import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './roomherostyle.css'
function roomhero() {
  return (
    <div id="roomhero">
      <Container >
        <Row>
          <Col>
          <h5>
            <span style={{color:"#285484"}}>Home</span> / Room
          </h5>
           <p>
           Rooms
           </p>
               
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default roomhero;
