import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "../components/hero";
import Subhero from "../components/subhero/subhero";
import Room from "../components/room/room";
import { Row} from "react-bootstrap";
import CustomCard from "../components/card/card";
import Location from "../components/location/location";
function HomePage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      await axios.get("/roomslist").then((res) => {
        setData(res.data);
        setLoading(false);
      });
    }
    fetchData();
  }, []);
  return (
    <div>
      <Hero />
   
      <Row xs={1} md={3} className="g-3 mx-5 mt-4">
        {loading ? (
          <div> Loading ...</div>
        ) : 
        (
          
          data.slice(0,2).map((item) => { 
            return <Room key={item._id} item={item} />
          })
        )
        }
      <CustomCard/>
      </Row>
 
      <Subhero />
      <Location/>
    </div>
  );
}

export default HomePage;
