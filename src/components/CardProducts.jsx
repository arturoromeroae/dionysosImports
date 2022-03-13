import React from 'react';
import '@styles/CardProducts.scss'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';

const CardProducts = ({ imageUrl, title, code, content, country, type, size }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    className='imageCard'
                    component="img"
                    image={imageUrl}
                    alt="green iguana"
                />
                <CardContent>
                    <div className='cardContainer'>
                        <h3>{ title }</h3>
                        <h6>{ code }</h6>
                        <h5>{ country }</h5>
                        <h5>{ type }</h5>
                        <h5>{ size }</h5>
                        <br />
                        <p>{ content }</p>
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default CardProducts;