import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar style={{backgroundColor:'purple',marginLeft:'0px'}}>
                
                    <Typography  variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        BlogApp
                    </Typography>
                    <Link to='/home'><Button style={{color:'white'}}>Home</Button></Link>
                    <Link to='/addblogs'><Button style={{color:'white'}}>Addblogs</Button></Link>
                </Toolbar>
            </AppBar>
        </Box>
    </div>
  )
}

export default Navbar
