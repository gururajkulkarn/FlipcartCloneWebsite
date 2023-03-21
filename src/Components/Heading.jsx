import React from 'react'
import "../App.css"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import  { useEffect, useState } from 'react'
import Translation from '../Components/Placement/Pdata.json';
import PrimarySearchAppBar from './Appbar/Topnav';

const Heading = () => {

  const [language,setLanguage]=useState("English")
  const [content,setContent] = useState({})

  useEffect(()=>{

    if(language=="English"){
      setContent(Translation.english)
  
    }
    else if (language=="Kannada"){
      setContent(Translation.kannada)
    }
  
  })

  return (
    <>

<PrimarySearchAppBar/>


    </>
  )
}

export default Heading
