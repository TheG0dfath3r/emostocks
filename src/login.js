import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import img from './plant.png'
import { Card,Grid,Badge,Spacer,Tabs,Page,Capacity,Spinner,Input, Button,Image,Text } from '@geist-ui/react'
import Axios from 'axios';

function Login(props) {
    const [value, setValue] = useState({email:'',password:''})
    const changeEmail = (event)=>{
        setValue({...value,email:event.target.value})
    }
    const changePass = (event)=>{
        setValue({...value,password:event.target.value})
    }
    const post=()=>{
        var data = value
            
            var config = {
              method: 'post',
              url: 'https://emostock.herokuapp.com/user/login',
              headers: { },
              data : data
            };
            
            Axios(config)
            .then(function (response) {
              console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
              console.log(error);
            });
    }

  return(


    <Grid.Container gap={2}  justify="center" style={{height:'100vh',width:'100vw'}}>
    <Grid xs={12} style={{display:'flex', justifyContent:'center', alignItems:'center',backgroundColor:'#d9ecf2'}}><Image height={500}
  src={img} /></Grid>
    <Grid xs={12} justify="center" style={{display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
    <Text h1>EmoStocks</Text>
    <Text >Wah bhaiya full stock market</Text>
        <div>
        
        <Input placeholder="Email" value={value.email}  onChange={changeEmail}/><br/>
<Spacer/>
<Input placeholder="Password" value={value.password} onChange={changePass}/><br/>
<Spacer/>
<Button shadow type="secondary" onClick={()=>post()}>Login</Button></div></Grid>
    
  </Grid.Container>



  )
}

export default Login;