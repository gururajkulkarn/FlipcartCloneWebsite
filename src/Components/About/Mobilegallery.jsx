import React from 'react'



const Mobilegallery = (props) => {


  return (
    <>
    <div className='row container'>
        
        <div style={{textAlign:"center"}} >
            <img src={props.pic}  className="img-fluid"/>
            <h3>{props.title}</h3>
            <h3 style={{color:"green"}}>{props.price}</h3>
            <h6>{props.descri}</h6>
            </div>
        </div>  



    </>
  )
}

export default Mobilegallery
