import React from 'react'

function room({item}) {
  const image1urel="https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500"

  return (
    <div>
        
        <div key={item._id} className="card">
         <img className="card-img-top" src={image1urel} alt="Cardcap"/>
        <div className="card-body">
        <h5 className="card-title">Room No {item.roomno}</h5>
        <p className="card-text">Room Capacity {item.roomcapacity}</p>
        <a href="/" className="btn btn-primary mx-4">Book Now</a>
        <a href="/" className="btn btn-primary">View Details</a>
        </div>
        </div>
        </div>
  )
}

export default room