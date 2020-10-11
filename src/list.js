import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Card,Grid,Badge,Spacer,Tabs,Page,Capacity,Spinner,Button,useToasts,Toast } from '@geist-ui/react'
import Axios from 'axios';
import { Link } from 'react-router-dom';
import ArrowUpCircle from '@geist-ui/react-icons/arrowUpCircle'
import ArrowDownCircle from '@geist-ui/react-icons/arrowDownCircle'


function List(props) {

  const [data, setData] = useState({})

  const [toasts, setToast] = useToasts()
  const click = () => setToast({ text: 'The Evil Rabbit jumped over the fence.' })
  const track = (name, symbol)=>{
    var config = {
        method: 'post',
        url: 'https://emostock.herokuapp.com/stock/track',
        headers: { 
          'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZjgxYTFlYjQ5NTIyYzI2OTgyMDJhYjIiLCJlbWFpbCI6InJhamF0QGdtYWlsLmNvbSIsIm5hbWUiOiJSYWphdCIsImlhdCI6MTYwMjMzMTExNSwiZXhwIjoxNjA0OTIzMTE1fQ.Gvw0YHutq3JIqlO9xoYy7dAScv1xsQLX1eVdF1bX3O0'
        },
        data : {
            "companyName":name,
            "symbol": symbol
        
      }}
      
      Axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        click()
      })
      .catch(function (error) {
        console.log(error);
      });
      click()
      setToast({ text: 'The Evil Rabbit jumped over the fence.' })
  
  }

  useEffect(()=>{
Axios.post('https://emostock.herokuapp.com/analyze/all').then((res)=>{
  console.log(res)
  setData(res.data)
})

  },[])
  if(data.companies){
   return data.companies.map((com)=>{
        return(<>
        
        <Card shadow>
           <div style={{width:'95%'}}>
           <Link 
           style={{textDecoration:'none'}}
           to={{
  pathname: '/related',
  state: {
    keyword: com.companyName.split(' ')[0]
  }
}}> <p style={{textDecoration:'none'}}>{com.companyName}</p></Link>
            { com.sentiment.label==='positive' ?  <ArrowUpCircle style={{float:'right'}}/> : <ArrowDownCircle style={{float:'right'}}/> }
            <Button auto type="success-light" style={{float:'right'}} onClick={()=>track(com.companyName, com.symbol)}>Track</Button>
            </div>  </Card>
          <Spacer/></>)
    })
  }
  else{
   return <div style={{display:'flex', alignItems:'center', justifyContent:'center', height:'80vh',width:'100%'}}><Spinner /></div>
  }
}

export default List;