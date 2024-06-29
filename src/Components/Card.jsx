import React, { useState } from "react";
import {
  Card as Note,
  CardHeader,
  CardActions,
  IconButton,
  Typography,
  Avatar,
  CardContent,
  Grid
} from "@mui/material";
import { Delete, Favorite, Share } from "@mui/icons-material";
import { red } from "@mui/material/colors";

export const Card = ({ notes, title, details, importance, created_at }) => {
  const [color, setColor] = useState('')

  const changeColor = () => {
    if (color === "") {
      setColor('teal')
    } else {
      setColor('')
    }
  }

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Note sx={{
        maxWidth: 345,
       margin: 'auto', 
       border: '1px solid #e0e0e0', 
       borderRadius: 2, 
       boxShadow: 1,
       '&:hover': { boxShadow: 4 }
      }}>
        <CardHeader
          avatar={<Avatar sx={{bgcolor: "teal"}}>N</Avatar>}
          action={<IconButton sx={{ color: red[400] }}><Delete /></IconButton>}
          title={title}
          subheader={created_at}
        />
        <CardContent>
          <Typography variant="body2">
            {details}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton onClick={() => {changeColor()}}>
            <Favorite sx={{color: color}} />
          </IconButton>
          <IconButton>
            <Share sx={{color: 'teal'}} />
          </IconButton>
        </CardActions>
      </Note>
    </Grid>
  );
};
