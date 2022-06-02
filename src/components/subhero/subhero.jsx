import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import image2 from "./subhero.jpg";
import "./subherostyle.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faElevator, faParking, faSuitcase, faWifi } from '@fortawesome/free-solid-svg-icons';

function subhero() {
  return (
    <div>
      <Container className="subheroclass">
        <Row>
          <Col sm={6}> 
            <h1>We have everything you need</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
              omnis, quaerat unde quod assumenda pariatur iure. Tempore debitis
              officiis perspiciatis.
            </p>
            <ul className="facilites flex-sd-2">
            <li  id="icons"><FontAwesomeIcon icon={faWifi} size="2x"/><p> Free available <br /> high speed WiFi</p>{/* Free available <br /> high speed WiFi */}</li>
            <li  id="icons"><FontAwesomeIcon icon={faSuitcase} size="2x"/><p>Free storage of<br /> luggage of any size </p></li>
            <li  id="icons"><FontAwesomeIcon icon={faParking} size="2x"/><p>Parking place <br />allocated to you</p></li>
            <li  id="icons"><FontAwesomeIcon icon={faElevator} size="2x"/><p>Elevator Service <br />Available</p></li>
            
 
            </ul>
          </Col>
          <Col sm={6}>
            <img src={image2} id='subheroimg' alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default subhero;
