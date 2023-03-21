import Carousel from 'react-bootstrap/Carousel';

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 controls" height="400px"style={{ margin:"10px"}}
          src="Images/111.jpg"
          alt="First slide"
        />
      
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 controls " height="400px"style={{ margin:"10px"}}
          src="Images/33.jpg"
          alt="First slide"
        />
      
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100 controls " height="400px"style={{ margin:"10px"}}
          src="Images/88.jpg"
          alt="First slide"
        />
      
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100 controls " height="400px"style={{ margin:"10px"}}
          src="Images/66.jpg"
          alt="First slide"
        />
      
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100" height="400px" style={{ margin:"10px"}}
          src="Images/44.webp"
          alt="Second slide"
        />
     
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100" height="400px" style={{ margin:"10px"}}
          src="Images/55.jpg"
          alt="Third slide"
        />
     
      </Carousel.Item>
    
    </Carousel>
  );
}

export default IndividualIntervalsExample;