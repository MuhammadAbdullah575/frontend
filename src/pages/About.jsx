import React from 'react'
import Abouthero from '../components/about/abouthero'
import Aboutcard from '../components/about/aboutcard'
import Aboutcardhero from '../components/about/aboutcardhero';
import {useEffect,useState} from 'react'
import {Row,Col} from 'react-bootstrap'
import axios from 'axios'
import About1 from '../components/about/about'
import News from '../components/about/newsletter'
import News1 from '../components/about/news1'
import { Container } from 'react-bootstrap';

function About (){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        async function fetchData() {
          await axios.get("http://localhost:4000/roomslist").then((res) => {
            setData(res.data);
            setLoading(false);
          });
        }
        fetchData();
      }, []);
    return (
      <div>
        <Container>

          <Abouthero />
          <Aboutcard />
         
          <Row ms={4}>       
        {loading ? (
          <div> Loading ...</div>
          ) : 
          (   
            data.slice(0,3).map((item) =>  {
            return <Col md={4}><Aboutcardhero key={item._id} item={item} /></Col>
          })
        )}
        </Row>
        <About1 />
        <News />
        <News1 />
              </Container>
      </div>
     
    );
}
export default About;