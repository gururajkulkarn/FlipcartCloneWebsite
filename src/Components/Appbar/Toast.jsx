import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';

function TransitionLeft(props) {
  return <Slide {...props} direction="left"/>;
}




export default function Toastnotify() {
  const [open, setOpen] = React.useState(false);
  const [transition, setTransition] = React.useState(undefined);

  const handleClick = (Transition) => () => {
    setTransition(() => Transition);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant='danger' onClick={handleClick(TransitionLeft)}>Notice</Button>
  
      <Snackbar
        open={open}
        onClose={handleClose}
        TransitionComponent={transition}
        message="Clone Flipcart website"
        key={transition ? transition.name : ''}
      />
    </div>
  );
}