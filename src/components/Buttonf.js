import React from "react";
import { Delete } from '@mui/icons-material';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ButtonGroup from '@mui/material/ButtonGroup';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';

function Buttonf() {
  return (
    <>
    <h1>Text Button</h1>
    <Button size="small" color="secondary"variant="string">Click Me</Button>
    <Button size="medium" color="error"variant="outlined">Click </Button>
    <Button size="large" color="warning"variant="contained" href="http://google.com">link</Button>
    
    <h1>button</h1>
    <Button variant="contained" color="secondary" startIcon={<DeleteIcon />}>Delete</Button>
    <Button variant="contained" color="warning" endIcon={<DeleteIcon />}>Delete</Button>
    

    <h1>Car</h1>
    <Button variant="contained" color="secondary" startIcon={<DirectionsCarIcon />}></Button>
    <h1>Text Button</h1>
    <Button size="small" style={{backgroundColor:'green'}}   variant="string">Click Me</Button>
    <h1>Text Button</h1>
    <Button size="small" sx={{backgroundColor:'pink'}}   variant="string">Click Me</Button>
    
    <h1>Button with click event</h1>
    <Button variant='contained' onClick={()=>console.log('Button Clicked')}>Click Me</Button>

  
    <h1>Button Group</h1>
    <ButtonGroup color='success' size='large' variant='contained'>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
      </ButtonGroup>

      <h1>Button Group</h1>
    <ButtonGroup color='success' size='large' variant='contained' orientation='vertical'>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
      </ButtonGroup>


      <h1>Folating action button</h1>
      <Fab color='secondary'>k</Fab>
      <Fab color='primary'><AddIcon /></Fab>
      <Fab variant='extended'><NavigationIcon />Navigation</Fab>
      <Fab color='secondary'><EditIcon /></Fab>
      <Fab disabled><FavoriteIcon /></Fab>
      
      
      
    </>
  );
}

export default Buttonf;





