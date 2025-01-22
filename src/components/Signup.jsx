import { Button, colors, Grid2, TextField } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div style={{margin:'5%'}}>
        <Grid2 container spacing={2}>
            <Grid2 size={{ xs: 6, md: 6 }}>
                <TextField fullWidth label='Name' placeholder='name' variant='outlined'></TextField>
            </Grid2>
            <Grid2 size={{ xs: 6, md: 6 }}>
                <TextField fullWidth label='Email' placeholder='Email' variant='outlined'></TextField>
            </Grid2>
            <Grid2 size={{ xs: 6, md: 6 }}>
                <TextField fullWidth label='Password' type='password' placeholder='password' variant='outlined'></TextField>
            </Grid2>
            <Grid2 size={{ xs: 6, md: 6 }}>
                <TextField fullWidth type='number' label='Phone Number' placeholder='phone number' variant='outlined'></TextField>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 12 }}>
                <TextField fullWidth type='text' label='Address' placeholder='address' variant='outlined' multiline rows={4}></TextField>
            </Grid2>
            <Grid2  size={{ xs: 12, md: 12 }}>
                <Button color='secondary' variant='contained'>Sign Up</Button>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 12 }}>
                <Link to={'/'}>Already Registered? Login</Link>
            </Grid2>
        </Grid2>
    </div>
  )
}

export default Signup