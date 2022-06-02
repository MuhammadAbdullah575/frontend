import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./roomcardstyle.css";
import { faBed, faPerson } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Roomcard({ item }) {
  const image1urel =
    "https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500";

    async function BookRoom(e) {
      axios({
        method: 'put',
        url: `http://localhost:4000/roomslist/${item._id}`,
        data: {
          roomcapacity: item.roomcapacity-1,
        }
      }).catch
      
      (err => {
        console.log(err);
      });
      
    };

  let navigate = useNavigate();
  function routeChange(e) {
    let path = `/rooms/details/${item._id}`;
    navigate(path);
  
  }

  return (
    <div>
      <Row id="card-room">
        <Col sm={4}>
          <div>
            <img id="imageroom" src={image1urel} alt="hero" />
          </div>
        </Col>
        <Col sm={6}>
          <h3
            className="room-title"
            style={{ cursor: "pointer" }}
            onMouseOver={changeBackground}
            onMouseLeave={normalbackground}
            onClick={routeChange}
          >
            Standard Twin Room Private Shared Bathroom
          </h3>
          <br className="2" />
          <p className="description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
            blanditiis facilis quia molestias nihil
            <br />
            <li>
              <FontAwesomeIcon icon={faPerson} size="2x" />{" "}
              <strong>{item.roomcapacity}</strong> Sleeps
            </li>
            <li>
              <FontAwesomeIcon icon={faBed} size="2x" />{" "}
              <strong>{item.ac}</strong> Air Conditioner
            </li>
          </p>
        </Col>
        <Col className="pricesection" sm={2}>
          <h2 className="hero-title" style={{ marginTop: "3rem" }}>
            Rs.{item.roomprice}
          </h2>
          <h2>{item.price}</h2>
          <br className="2" />
          <p className="description" style={{ marginTop: "4rem" }}>
            <Button variant="primary" size="lg" onClick={BookRoom}>
              Book Now
            </Button>
          </p>
        </Col>
      </Row>
    </div>
  );
  function changeBackground(e) {
    e.target.style.color = "#285484";
  }
  function normalbackground(e) {
    e.target.style.color = null;
  }
}

export default Roomcard;
