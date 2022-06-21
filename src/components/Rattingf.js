import React from "react";
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Typography from '@mui/material/Typography';

const Rattingf=()=>{
    return(
        <>
        <h1>Rating</h1>
        <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
        <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
        
        <h1>Icon rating</h1>
        
        </>
        
    );
};
export default Rattingf;