
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function Cards(props) {
  const cardData = props
  console.log(cardData)
  return (
    <Card sx={{ maxWidth: 345}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {cardData.cardData.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {cardData.cardData.description}
          </Typography>
          <Typography variant="h6" color="text">
            {cardData.cardData.duration}
          </Typography>
          <Typography variant="h5" color="text">
            {cardData.cardData.price} $
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" variant='contained'>
          Book
        </Button>
      </CardActions>
    </Card>
  );
}
