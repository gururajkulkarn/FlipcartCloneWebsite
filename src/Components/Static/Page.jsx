import  { useEffect, useState } from 'react'
import Translation from './Data.json'

function Page(){

  const [language,setLanguage]=useState("English")
  const [content,setContent] = useState({})

useEffect(()=>{

  if(language=="English"){
    setContent(Translation.english)

  }
  else if (language=="Kannada"){
    setContent(Translation.kannada)
  }
  else if (language=="Hindi"){
    setContent(Translation.hindi)
  }

})

  return (
    <>
<div className='container'>
<select style={{float:"right"}} value={language} onChange={(e)=>{setLanguage(e.target.value)}}>
<option>English</option>
<option>Kannada</option>
<option>Hindi</option>
</select>

<h1>{content.heading}</h1>
<h1 className='container'>{content.Title}</h1>
<h3 className='container'>{content.Description}</h3>
<h3 className='container'>{content.Description2}</h3>
      </div>
      
    </>
  )
}

export default Page;

