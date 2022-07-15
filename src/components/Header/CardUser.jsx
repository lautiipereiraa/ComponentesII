import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CardUser = ({data}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        
        image="https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos-810x540.jpg"
        alt="mujer con gorro y anteojos"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.login}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.website}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Repositories</Button>
        <Button size="small">About me</Button>
      </CardActions>
    </Card>
  );
}
export default CardUser;