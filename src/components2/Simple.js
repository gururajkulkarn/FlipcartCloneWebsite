import Carousel from "react-multi-carousel";
import {  Image } from "semantic-ui-react";
import {Link,Outlet} from 'react-router-dom'


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30
  }
};
const images = [
  "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  "https://images.unsplash.com/photo-1555375771-14b2a63968a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
  "https://images.unsplash.com/photo-1569411032431-07598b0012c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80t&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  "https://images.unsplash.com/photo-1555375771-14b2a63968a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
  "https://images.unsplash.com/photo-1569411032431-07598b0012c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80t&fit=crop&w=800&q=60"


];

const Detailes = [
  {
    "name":"Mobiles",
    "price":"From Rs.500/-",
    "descri":"A projector has become a necessity in schools, at home, or in an office.  There are certain features that you"
}

]

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const Simple = ({ deviceType}) => {
  return (
    <>
<div className="row">
<div className=" col col-2 mt-5" >
  <div className="container mt-5" > 
  <h1>BEST OF ELECTRONICS ITEMS</h1>
 <Link to="/aboutus"><button className="btn btn-primary">VIEW ALL</button></Link>
 <div style={{backgroundImage:"url(Images/44.png)",backgroundRepeat:"no-repeat",marginLeft:"-90px",width:"300px",height:"500px"}}></div>
 </div>
</div>
<div className="col col-10">

<Carousel
      ssr
      partialVisbile
      deviceType={deviceType}
      itemClass="image-item"
      responsive={responsive}
    >    
      {images.slice(0, 5).map(image => {
        return (
          <div>
          <Image
            draggable={false}
            style={{ width: "100%", height: "100%",borderRadius:"8px" }}
           src={image}
          /> 
      {Detailes.slice(0, 5).map(item => (
        <div className="mt-4" style={{color:"black",textAlign:"center"}}>
        <h3>{item.name}</h3>
        <h4>{item.price}</h4>
        <h6>{item.descri}</h6>
          </div>
      ))}
          </div>
        );
      })}  
  
    </Carousel>
</div>
</div>

<Outlet/>
    
    </>
  );
};

export default Simple;
