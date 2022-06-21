import React from "react";
import Checkbox from '@mui/material/Checkbox';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import {FavoriteBorder} from '@mui/icons-material';


function Checkboxf() {
    return (
      <>
    <h1>Checkbox</h1>
    <Checkbox />
    <Checkbox checked/>
    <Checkbox checked={true} color='success'/>
    <Checkbox defaultChecked indeterminate/>
    <Checkbox icon={<FavoriteBorder />}/>

    <Checkbox onChange={()=>console.log("Checked Done")}/>
    





      </>
  );
}

export default Checkboxf;
