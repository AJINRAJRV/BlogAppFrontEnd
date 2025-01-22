import React from 'react'
import Home from './components/Home'
import Login from './components/Login'
import { Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'
import Addblogs from './components/Addblogs'
import Navbar from './components/Navbar'
import Main from './components/Main'
import PrivateRoutes from './components/PrivateRoutes'

const App = () => {
  return (
    <>

      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route element={<PrivateRoutes/>}/>
        <Route path='/home' element={<Main child={<Home/>}/>}></Route>
        <Route path='/addblogs' element={<Main child={<Addblogs/>}/>}></Route>
      </Routes>
    </>
  )
}

export default App
