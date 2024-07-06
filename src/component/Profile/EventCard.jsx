import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function EventCard() {
  return (
    <div>
      <Card sx={{width:345}}>
        <CardMedia
          sx={{ height: 345 }}
          image="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=pexels-ella-olsson-572949-1640772.jpg&fm=jpg"
        />
        <CardContent className="text-left">
            <Typography variant='h5' >
                Ethiopia Fast Food
            </Typography>
            <Typography variant='body2' >
                50% off on your first order
            </Typography>
            <div className="py-2 space-y-2">
                <p>{"burger"}</p>
                <p className="text-sm text-blue-500">Febrauray 15, 2024 12:00 AM</p>
                <p className="text-sm text-red-500">Febrauray 15, 2024 12:00 AM</p>
            </div>
        </CardContent>
        {false && <CardActions>
            <IconButton>
                <DeleteIcon/>
            </IconButton>
        </CardActions>}
      </Card>
    </div>
  );
}

export default EventCard;
