import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Card,Grid,Badge,Spacer,Tabs,Page,Capacity,Spinner } from '@geist-ui/react'
import Axios from 'axios';

function List(props) {

  const [data, setData] = useState({})

  useEffect(()=>{
Axios.post('https://emostock.herokuapp.com/analyze/all').then((res)=>{
  console.log(res)
  setData(res.data)
})

  },[])
  if(data.companies){
   return data.companies.map((com)=>{
        return(<Card shadow>
            <p>{com.companyName}</p>
          </Card>)
    })
  }
  else{
   return <Page><Spinner /></Page>
  }
}

export default List;