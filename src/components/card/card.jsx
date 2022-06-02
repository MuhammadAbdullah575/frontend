import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './cardstyle.css'
function card() {
  return (
    <div>
    <Card className='customcard' >
        <div className="innercard">
    <Card.Body>
      <Card.Title className='h1'>Stay Longer, Save More</Card.Title>
      <div className="text">
      It's simple: the longer you stay, the more you save!
      </div>
      <Card.Text className='offer'>
      Save up to 30% on daily rate for stays longer than 14 nights
        <br/>
        <br/>
        Save up to 20% off the nightly rate on stays between 7-14 nights
      </Card.Text>
      <Button variant="primary" style={{marginInline:"6rem"}}>Book Room</Button>
    </Card.Body>
    </div>
  </Card></div>
  )
}

export default card