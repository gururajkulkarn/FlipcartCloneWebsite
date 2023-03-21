import React from 'react'
import { useState } from 'react'
import Footer from '../Footer'
import "../File.css"
import Mobilegallery from './Mobilegallery'
import Items from './Data.js';
import './Mobile.css'
const Aboutus = () => {

  return (
    <>

    <div style={{display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"20px"}}>
    <h1>Best Of Electronics </h1>
</div>
<div style={{display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"70px"}}>
    <div>12 Items</div>
</div>

<hr/>
<div className='row container mx-auto mb-5' >
  <div className='col col-3 ' style={{textAlign:"center"}}>
  <Mobilegallery title={Items.mobiles1.name} pic={Items.mobiles1.image1} descri={Items.mobiles1.descri} price={Items.mobiles1.price} />
  </div>
  <div className='col col-3' style={{textAlign:"center"}}>
  <Mobilegallery title={Items.mobiles2.name} pic={Items.mobiles2.image2} descri={Items.mobiles2.descri} price={Items.mobiles2.price} />
  </div>
  <div className='col col-3' style={{textAlign:"center"}}>
  <Mobilegallery title={Items.mobiles3.name} pic={Items.mobiles3.image3} descri={Items.mobiles3.descri} price={Items.mobiles3.price} />
  </div>
  <div className='col col-3' style={{textAlign:"center"}}>
  <Mobilegallery title={Items.mobiles4.name} pic={Items.mobiles4.image4} descri={Items.mobiles4.descri} price={Items.mobiles4.price} />
  </div>
</div>

<div className='row container mx-auto mb-5' >
  <div className='col col-3 ' style={{textAlign:"center"}}>
  <Mobilegallery title={Items.mobiles5.name} pic={Items.mobiles5.image5} descri={Items.mobiles5.descri} price={Items.mobiles5.price} />
  </div>
  <div className='col col-3' style={{textAlign:"center"}}>
  <Mobilegallery title={Items.mobiles6.name} pic={Items.mobiles6.image6} descri={Items.mobiles6.descri} price={Items.mobiles6.price} />
  </div>
  <div className='col col-3' style={{textAlign:"center"}}>
  <Mobilegallery title={Items.mobiles7.name} pic={Items.mobiles7.image7} descri={Items.mobiles7.descri} price={Items.mobiles7.price} />
  </div>
  <div className='col col-3' style={{textAlign:"center"}}>
  <Mobilegallery title={Items.mobiles8.name} pic={Items.mobiles8.image8} descri={Items.mobiles8.descri} price={Items.mobiles8.price} />
  </div>
</div>


<div className='row container mx-auto mb-5' >
  <div className='col col-3 ' style={{textAlign:"center"}}>
  <Mobilegallery title={Items.mobiles9.name} pic={Items.mobiles9.image9} descri={Items.mobiles9.descri} price={Items.mobiles9.price} />
  </div>
  <div className='col col-3' style={{textAlign:"center"}}>
  <Mobilegallery title={Items.mobiles10.name} pic={Items.mobiles10.image10} descri={Items.mobiles10.descri} price={Items.mobiles10.price} />
  </div>
  <div className='col col-3' style={{textAlign:"center"}}>
  <Mobilegallery title={Items.mobiles11.name} pic={Items.mobiles11.image11} descri={Items.mobiles11.descri} price={Items.mobiles11.price} />
  </div>
  <div className='col col-3' style={{textAlign:"center"}}>
  <Mobilegallery title={Items.mobiles12.name} pic={Items.mobiles12.image12} descri={Items.mobiles12.descri} price={Items.mobiles12.price} />
  </div>
</div>


<Footer/>
    </>
  )
}

export default Aboutus
