import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Card,Grid,Badge,Spacer,Tabs,Page,Capacity,Spinner } from '@geist-ui/react'
import Axios from 'axios';

function Story(props) {

  const [data, setData] = useState({})

  useEffect(()=>{
Axios.post('https://emostock.herokuapp.com/analyze',props.location.state.data).then((res)=>{
  console.log(res)
  setData(res.data)
})

  })
  if(data.entities){
    return (
    
      <Page>
        <Page.Header><h1>Analysis</h1>
       
        </Page.Header>
        <Page.Content>
       <h2>Story</h2>
    <p>{data.news}</p>
       <br/>
       <h2>Entities</h2>   
    {data.entities.map((entity)=>{return <Badge style={{marginRight:'5px'}}>{entity.text}</Badge>})} 
       
       <br/>
       <h2>Market Sentiment</h2>
    {data.entities.map((entity)=>{return (<><Capacity value={Math.abs(entity.sentiment.score)*100}/><br/></>)})} 
   </Page.Content>
   </Page>
       
     );
  }
  else{
   return <Page><Spinner /></Page>
  }
}

export default Story;