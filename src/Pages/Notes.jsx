import React, { useEffect, useState } from "react";
import { Card } from "../Components/Card";
import { Box, Divider, Grid, Typography } from "@mui/material";

export const Notes = () => {
const [notes, setNotes] = useState([])

const getData = async () => {
  try {
    const res = await fetch('http://127.0.0.1:5000/notes')
    const data = await res.json()
    if (!res.ok){
      throw new Error("Network response was not ok!")
    }
    setNotes(data)
  } catch(err) {
    console.log('Error in fetching the requested data', err)
  }

}

useEffect(() => {
  getData()
}, [])
 
  return (
    <Box sx={{display: 'flex', flexDirection: "column"}}>
    <Typography variant="h5" gutterBottom color="primary">
      Notes
    </Typography>
    <Divider sx={{marginBottom: "0.5em"}} />

     {notes.length === 0? (
      <Typography variant="body2" color='InfoText'>
        No Notes To Display!
      </Typography>
     ): 
     <Grid container spacing={2}>
     {notes.map(note => {
       return <Card key={note['_id']} 
       notes={notes}
       title={note['title']} 
       details={note['details']} 
       created_at={note['created_at']} 
       importance={note['importance']} />
     })}
   </Grid>}
      {/* <Typography variant="h6" color="teal">
        No Notes!
      </Typography> */}
    
    </Box>



  );
};
