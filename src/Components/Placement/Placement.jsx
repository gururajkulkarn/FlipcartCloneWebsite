import React from 'react'
import Footer from '../Footer'
import  { useEffect, useState } from 'react'
import Translation from './Pdata.json';

const Placement = () => {

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
    <select value={language} onChange={(e)=>{setLanguage(e.target.value)}}>
<option>English</option>
<option>Kannada</option>
<option>Hindi</option>
</select>
        
<h1 className='titles'>{content.notification}</h1>

      <Footer/>
    </>
  )
}

export default Placement
