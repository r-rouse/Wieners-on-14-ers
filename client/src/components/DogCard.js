import React from 'react'




const DogCard = (props) => {
  
 

    return (
        <div className='Dog-grid '>
            <h1>{props.name}</h1>
      <div className="Dog-card" onClick={props.onClick}>
          <img className='img' src= {props.image} alt="Dog"/> 
        <div className="info-wrapper flex-row space">
          <h3> {props.breed}</h3>
        </div>
      </div>
      </div>
    )
  }
  
  export default DogCard