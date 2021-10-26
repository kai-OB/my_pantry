import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Mediacard(props) {
  return (
    <Card sx={{ maxWidth: 240, height: 290, borderRadius: 3, marginBottom: "20px"}}>
      <CardActionArea>
          {/* <div style={{postion: "absolute", marginTop: 20px}}>
              <p>{props.isOpen}</p>
          </div> */}
        <CardMedia
          component="img"
          height="180"
          image={props.image}
          alt="green iguana"
          position="relative"
        />
        <CardContent>
          <Typography gutterBottom variant="subtitle1" component="div" sx={{fontWeight: "bold"}}>
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Hours: {props.startTime} to {props.endTime} on {props.days}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}