import React from 'react'
import {Link, Outlet } from 'react-router-dom'
import Heading from './Heading'


const Nav = () => {
  return (
    <>
     <Heading/>
      <nav className="navbar navbar-expand-lg bg-body-tertiary  navbar-dark ">
  <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" >
    <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto" style={{width:"800px"}}>

      <li style={{marginLeft:"-300px"}}>
      
<Link to="/">
  <img src="Images/growsery.jpg"  width="80px" height="80px" />
 </Link>
 <a href="https://flipcart.com"><h6 style={{color:"black",marginLeft:"15px"}}>Growsery</h6></a>
      </li>
        <ul>
      <li>
          <Link to="#"><img src="Images/mobile.jpg"  width="80px" height="80px" />
</Link>
<a href="https://flipcart.com"><h6 style={{color:"black",marginLeft:"15px"}}>Mobiles</h6></a>

          <ul class="dropdown">
              <li><Link to="/aboutus">Electronics Items</Link></li>
              <li><Link to="/vision">Vision and Mission</Link></li>
              <li><Link to="">Founder</Link></li>
              <li><Link to="#">Chairman</Link></li>
              <li><Link to="#">Voice-Chairmanperson</Link></li>
              <li><Link to="#">Director Academics</Link></li>
              <li><Link to="#">Principal </Link></li>
              <li><Link to="#">Awards</Link></li>
              <li><Link to="#">Voice-Chairmanperson</Link></li>
              <li><Link to="#">Director Academics</Link></li>
          </ul>
      </li> 
  </ul>
  <ul>
      <li>
          <Link to="#"> <img src="Images/fashion.webp"  width="80px" height="80px" /></Link>
          <a href="https://flipcart.com"><h6 style={{color:"black",marginLeft:"15px"}}>Fashions</h6></a>

          <ul className="dropdown">
              <li><Link to="/aboutus">Fashion</Link></li>
              <li><Link to="#">Medical Facility</Link></li>
              <li><Link to="#">Hostel</Link></li>
              <li><Link to="#">Events</Link></li>
              <li><Link to="#">Sports and Games</Link></li>
          </ul>
      </li> 
  </ul>

  <li>
      <Link to="/aboutus"><img src="Images/electronics.webp"  width="80px" height="80px" /></Link>
      <a href="https://flipcart.com"><h6 style={{color:"black",marginLeft:"6px"}}>Electronics</h6></a>

      </li>
      <li>
      <Link to="/aboutus"><img src="Images/home.jpg"  width="80px" height="80px" /></Link>
      <a href="https://flipcart.com"><h6 style={{color:"black",marginLeft:"35px"}}>Home</h6></a>

      </li>
      <li>
      <Link to="/motivation"><img src="Images/applience.jpg"  width="80px" height="80px" /></Link>
      <a href="https://flipcart.com"><h6 style={{color:"black",marginLeft:"25px"}}>Applience</h6></a>

      </li>
      <li>
      <Link to="/aboutus"><img src="Images/travel.jpg"  width="80px" height="80px" /></Link>
      <a href="https://flipcart.com"><h6 style={{color:"black",marginLeft:"25px"}}>Travel</h6></a>
      </li>
      <li>
      <Link to="/aboutus"><img src="Images/offer.jpg"  width="80px" height="80px" /></Link>
      <a href="https://flipcart.com"><h6 style={{color:"black",marginLeft:"12px",width:"80px"}}><span>Top Offers</span></h6></a>
      </li>
      <li>
      <Link to="/aboutus"><img src="Images/toys.jpg"  width="80px" height="80px" /></Link>
      <a href="https://flipcart.com"><h6 style={{color:"black",marginLeft:"25px"}}>Toys</h6></a>
      </li>
      <li>
      <Link to="/aboutus"><img src="Images/bike.jpg"  width="80px" height="80px" /></Link>
      <a href="https://flipcart.com"><h6 style={{color:"black",marginLeft:"2px",width:"120px"}}>Two wheelers</h6></a>
      </li>
      </ul>
      
    </div>
  </div>
</nav>
<hr style={{height:"1.5px",backgroundColor:"black",marginBottom:"20px"}}/>

<Outlet/>

    </>
  )
}

export default Nav
