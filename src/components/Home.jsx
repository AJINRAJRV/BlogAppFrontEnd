import { Button, Card, CardActions, CardContent, CardMedia, Grid2, Typography } from '@mui/material';

import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Home = () => {
    const[cardData,setData]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:3000/api/home').then((res)=>{
            console.log(res.data)
            setData(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    },[])

  return (
    <div style={{margin:'5%'}}>
    <Grid2 container spacing={2}>
        {cardData.map((row)=>(
        <Grid2 size={4}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                sx={{ height: 140 }}
                image={row.blogUrl}//data binding {}
                title="green iguana"
                />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {row.blogTitle}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {row.blogDescription}
                        </Typography>
                    </CardContent>
                        <CardActions>
                            <Button variant='outlined' size="small">Update</Button>
                            <Button variant='outlined' size="small">Delete</Button>
                        </CardActions>
            </Card>
        </Grid2>
        ))}
    </Grid2>
    
    </div>
  )
}

export default Home