import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';

import ShareIcon from '@mui/icons-material/Share';
const actions = [
  { icon: <i class="fa-brands fa-facebook" style={{color:"blue",fontSize:"45px"}}></i>, name: 'Facebook' }, 
  { icon: <i class="fa-brands fa-instagram" style={{color:"red",fontSize:"45px"}}></i>, name: 'Instagram' },
  { icon: <i class="fa-brands fa-twitter" style={{color:"lightblue",fontSize:"45px"}}></i>, name: 'Twitter' },
  { icon: <i class="fa-brands fa-youtube" style={{color:"red",fontSize:"45px"}}></i>, name: 'YouTube' },
  { icon: <i class="fa-brands fa-whatsapp" style={{color:"green",fontSize:"45px"}}></i>
  , name: 'whatsapp' },

];
export default function OpenIconSpeedDial() {
  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }} >
      <SpeedDial 
        ariaLabel="SpeedDial openIcon example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<ShareIcon  openIcon={<ShareIcon />} />}
      >
        {actions.map((action) => (
          <SpeedDialAction 
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}