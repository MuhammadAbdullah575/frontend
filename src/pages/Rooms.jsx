import React from 'react'
import Room from '../components/room/roomcard'
import { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row'

import Roomhero from '../components/room/roomhero'
import axios from 'axios'
function Rooms() {
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
      <Roomhero />
      <Row xs={1} md={1} className="g-3 m-5 mt-5"> 
        {loading ? (
          <div> Loading ...</div>
        ) : 
        (
          
          data.map((item) => {
            return <Room key={item._id} item={item} />
           
          })
        )}
        
      </Row> 
      </div>
  )
}

export default Rooms