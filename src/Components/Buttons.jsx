import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Social from './Social';
export default function BasicButtons() {
  return (
    <Stack  direction="row" className="butons">
   
      <Button variant="contained" className="m-4 buton one" style={{backgroundColor:"red"}}>Allumini Portal</Button>
      <Button variant="contained" className="m-4 buton two" style={{backgroundColor:"green"}}>NBA Acceredation Letter</Button>
      <Button variant="contained" className="m-4 buton three" style={{backgroundColor:"purple"}}>Admission Enquiry Form</Button>
      <Button variant="contained" className="m-4 buton four">Admission Query Call: <span>8854275186</span></Button><span style={{zIndex:"1",position:"fixed",right:"30px",top:"400px"}}> <Social/></span>
     
    </Stack>

    
    
  );
}