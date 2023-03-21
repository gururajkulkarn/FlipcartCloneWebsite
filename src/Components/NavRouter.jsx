import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Aboutus from './About/Aboutus'
import Contact from './Contact/Contact'
import Nav from './Nav'
import Navbar from './Navbar'
import Placement from './Placement/Placement'
import Research from './Placement/Research'
import Motivation from './Placement/Motivation'
import Staticpage from './Static/Staticpage'


const NavRouter = () => {
  return (
    <>
      

<BrowserRouter>
<Routes>
        <Route exact path="/" element={<Navbar/>}/>
        
        <Route exact path="/" element={<Nav/>}>
        <Route exact path="/aboutus" element={<Aboutus/>}/>
        <Route exact path="/placement" element={<Placement/>}/>
        <Route exact path="/research" element={<Research/>}/>
        <Route exact path="/motivation" element={<Motivation/>}/>
        <Route exact path="/staticpage" element={<Staticpage/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        </Route>
    
   
</Routes>
</BrowserRouter>


    </>
  )
}

export default NavRouter
