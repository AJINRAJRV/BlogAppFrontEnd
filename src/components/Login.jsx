import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  //array destructuring
  const[form,setForm]=useState({
    userEmail:'',
    userPassword:'',
  })

  const navigate=useNavigate()

  const capValue=()=>{
    //console.log(form)
    axios.post('http://localhost:3000/user/login',form).then((res)=>{
      alert(res.data.message);
      //console.log(res)
      navigate('/home')
    }).catch((error)=>{
      alert('Invalid Login');
    })
  }

  return (
    <div style={{marginLeft:'40%',marginTop:'5%'}}>
        <Typography variant='h4' style={{color:'purple'}}>BlogApp Login</Typography><br />
        <div>
        <TextField label='Email' placeholder='Email' variant='outlined' name='userEmail' onChange={(e)=>{setForm({...form,userEmail:e.target.value})}}></TextField><br /><br />
        </div>
        <div>
        <TextField label='Password'  placeholder='password' variant='outlined' name='userPassword' onChange={(e)=>{setForm({...form,userPassword:e.target.value})}}></TextField>
        </div>
        <br /><br />
        <div>
        <Button color='secondary' variant='contained' onClick={capValue}>Login</Button>
        </div><br />
        <div>
            <Link  to={'/signup'} style={{color:'purple'}}>New User? Please Register</Link>
        </div>
        
    </div>
  )
}


export default Login