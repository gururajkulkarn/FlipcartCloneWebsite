import React from 'react'
import '../App.css'
const Footer = () => {
  return (
    <>
    <div className=" footer">
  <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5  ">
    <div className="col mb-3 mt-5">
<h3 style={{marginLeft:"50px"}}>About Us<hr/></h3>
      <p className="text-muted ml-5">
        <img src="Images/111.jpg" style={{borderRadius:"20px",height:"220px",width:"220px",marginLeft:"50px"}}/><span style={{marginLeft:"90px",color:"white"}}>Flipcart</span></p>
    </div>

    <div className="col mb-3">

    </div>

    <div className="col mb-3 mt-5">
    <h3>&nbsp;Quick Links<hr/></h3>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
      </ul>
    
    </div>
   

    <div className="col mb-3 mt-5">
    <h3>&nbsp;Contact Us<hr/></h3>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
      </ul>
    </div>

   
  
  </footer>
  <h6 style={{color:"white",backgroundColor:"black",textAlign:'center',height:"50px"}}>Flipcart©2023</h6>
</div>
      
    </>
  )
}

export default Footer
