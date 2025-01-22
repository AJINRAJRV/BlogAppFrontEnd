import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Addblogs = () => {
  return (
    <div style={{marginLeft:'40%',marginTop:'5%'}}>
        <Typography variant='h4' style={{color:'purple'}}>AddBlog Page</Typography><br />
        <div>
        <TextField label='Title' placeholder='Title' variant='outlined' name='blogTitle'></TextField><br /><br />
        </div>
        <div>
        <TextField label='Blog Description' type='text' placeholder='Description' variant='outlined' name='blogDescription'></TextField>
        </div>
        <br /><br />
        <div>
        <TextField label='Image URL' type='text' placeholder='Image URL' variant='outlined' name='blogUrl'></TextField>
        </div>
        <br /><br />
        <div>
        <Link to="{/}"><Button color='secondary' variant='contained'>Add Blog</Button></Link>
        </div><br />
        
        
    </div>
  )
}

export default Addblogs