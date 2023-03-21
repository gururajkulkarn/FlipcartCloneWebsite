
import Footer from '../Footer'
import axios from 'axios';
import { useState,useEffect} from 'react';
import Button from '@mui/material/Button';
import { Card } from '@mui/material';
import './App.css';



const options = {
	method: 'GET',
	url: 'https://quotes15.p.rapidapi.com/quotes/random/',
	headers: {
	  'X-RapidAPI-Key': 'fcf5b65ab4mshbb0373fc8ebf3b1p174b61jsnbbd27222dbb5',
	  'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
	}
  };

const Motivation = () => {
    const[text,setText]=useState();

const handleclick=()=>{
	axios.request(options).then(function (response) {
		console.log(response.data);
		setText(response.data.content)
	}).catch(function (error) {
		console.error(error);
	});
}



// useEffect(()=>{
//     axios.request(options).then(function (response) {
// 		console.log(response.data);
// 		setText(response.data.content)
// 	}).catch(function (error) {
// 		console.error(error);
// 	});
// },[])
  return (
    <>
    

        <Card variant="outlined" class="motive"  ><h1 style={{margin:"40px"}}>{text}</h1></Card>
<Button variant="contained" color="success" style={{marginLeft:'600px',marginBottom:"50px"}} onClick={handleclick}>Motivation</Button>
	
      <Footer/>
    </>
  )
}

export default Motivation


