import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ItemDetail from '../Body/ItemDetail';

const CardUser = ({data}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        
        image="https://www.pngplay.com/wp-content/uploads/10/Rick-And-Morty-PNG-Images-HD.png"
        alt="mujer con gorro y anteojos"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.login}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.website}
        </Typography>
        <ItemDetail />
      </CardContent>
      <CardActions>
        
        <Button size="small">Repositories</Button>
        <Button size="small">About me</Button>
        
      </CardActions>
    </Card>
  );
}
export default CardUser;