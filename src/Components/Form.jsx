import { Box, Button, Stack, Typography, useMediaQuery } from '@mui/material';
import React, { useRef, useState } from 'react';
import image2 from "../assets/Images/2.jpg";
import image1 from "../assets/Images/1.jpg";
import image3 from "../assets/Images/3.jpg";
import "../scss/styles.css";
import { Lock, Mail, Person } from '@mui/icons-material';


export const Form = () => {
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const usr = document.getElementsByClassName('lg-usr')[0]
  const psw = document.getElementsByClassName('lg-psw')[0]
  const cont = document.getElementsByClassName('cont')[0]

  const animateSign = () => {
    cont.classList.toggle("animate-sign")
    console.log("Sign Animate!")
  }
  const animateLogin = () => {
    cont.classList.toggle('animate-login')
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user == "") {
      usr.classList.add('err')
    }
    if (pass == ""){
      psw.classList.add('err')
    }
  } 
  return (
    <>
    <div className='cont' 
    // sx={{
    //   width: "40em",
    //   height: "25em",
    //   boxShadow: '3px 3px 3px 0  #222',
    //   borderRadius: '.5em',
    // }}
    >
    <Typography className='main-heading log-heading' variant='body2' color='primary' sx={{fontSize: '1.4em'}}>Login</Typography>
    <div className="cover"></div>
      {/* login form */}
    <div 
    className='box login '
    >
      <Stack className='stack' sx={{
        width: '50%',
      }}>
        <Typography className='tp heading' 
        variant='body2' 
        color="#000" gutterBottom>
          Welcome Back!
        </Typography>
        <Typography
        className='para' 
        variant='body2' 
        color="grayText" gutterBottom
        sx={{
          fontSize: 12,
        }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, aperiam!
        </Typography>
      </Stack>
        <form className='form' noValidate>
          <div className="input-box input1">
            <input type="text" id='user' className='lg-usr' required onChange={(e) => {setUser(e.target.value)}} />
            <label htmlFor="user">
              <Typography variant='body2'>
              Username
              </Typography></label>
            <i><Person /></i>
          </div>
          <div className="input-box input2">
            <input type="password" id='psw' className='lg-psw' required onChange={(e) => {setPass(e.target.value)}} />
            <label htmlFor="psw">
              <Typography variant='body2'>
              Password
              </Typography></label>
            <i><Lock /></i>
          </div>
          <div className="btn">
            <input type="submit" value='Login' onClick={(e) => {handleSubmit(e)}} />
          </div>
          <div className="links">
          <Button sx={{
            fontSize: 11,
            "&:hover": {borderBottom: 1}
           }}>
            Forgot Password
          </Button>
          <Button sx={{
            fontSize: 11,
            "&:hover": {borderBottom: 1}
           }} 
           onClick={() => {animateSign()}}>
            don't have an account
          </Button>
          </div>
        </form>
    </div>
    {/* code for the sign up form */}
    <div 
    className='box sign'
    >
        <form className='form' noValidate>
          
          <div className="input-box input1">
            <input type="text" id='user2' required />
            <label htmlFor="user2">
              <Typography variant='body2'>
              Username
              </Typography></label>
            <i><Person /></i>
          </div>
          <div className="input-box input2">
            <input type="text" id='email' required />
            <label htmlFor="email">
              <Typography variant='body2'>
              Email
              </Typography></label>
            <i><Mail /></i>
          </div>
          <div className="input-box input3">
            <input type="password" id='psw2' required />
            <label htmlFor="psw2">
              <Typography variant='body2'>
              Password
              </Typography></label>
            <i><Lock /></i>
          </div>
          <div className="input-box input4">
            <input type="password" id='psw3' required />
            <label htmlFor="psw3">
              <Typography variant='body2'>
              Confirm Password
              </Typography></label>
            <i><Lock /></i>
          </div>
          <div className="btn">
            <input type="submit" value='Sign Up' />
          </div>
          <div className="links">
            <Button sx={{
              fontSize: 11,
              "&:hover": {borderBottom: 1}
            }}
            onClick={() => {animateLogin()}}>
              Already Have an Account
            </Button>
          </div>
        </form>
      <Stack className='stack' sx={{
        width: '40%',
      }}>
        <Typography className='tp heading' 
        variant='body2' 
        color="#222" gutterBottom>
          Create Your Account Now!
        </Typography>
        <Typography 
        className='para'
        variant='body2' 
        color="grayText" gutterBottom
        sx={{
          fontSize: 13,
        }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, aperiam!
        </Typography>
      </Stack>
    </div>
    </div>
    <br />
    <Button variant='outlined' color='primary' onClick={() => {animateSign()}} sx={{border: "none", padding: 0.3, '&:hover': {border: 'none', borderBottom: 1 }}}>Sign Animate</Button>
    </>
  );
};
