import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import { Card,Grid,Badge,Spacer,Tabs,Page,Capacity,Spinner,Text } from '@geist-ui/react'
import { ArrowUp } from '@geist-ui/react-icons'

import Axios from 'axios';

function Story(props) {

  const [data, setData] = useState({})

  useEffect(()=>{
Axios.post('https://emostock.herokuapp.com/analyze',props.location.state.data).then((res)=>{
  console.log(res)
  setData(res.data)
},[])

  })
  if(data.entities){
    return (
    
      <Page>
        <Page.Header><h1>🤑EmoStock</h1>
        </Page.Header>
        
        <Page.Content>
        <h2>Stocks</h2>
        <Grid.Container gap={3}>
    {data.companyArr.map((com)=>{return (<Grid xs={8}><Text h3>{com.Symbol}</Text>
    {com.sentiment.label==='positive' ? <Capacity style={{width:'200px'}} color={'green'} value={Math.abs(com.sentiment.score)*100}></Capacity> : <Capacity style={{width:'200px'}} color={'red'} value={Math.abs(com.sentiment.score)*100}></Capacity>}
    <Spacer/><text h3>283</text><ArrowUp color={'green'}/></Grid>)} )}
    </Grid.Container>
        
       
       <h2>Story</h2>
    <p>{data.news}</p>
       <br/>
       <h2>Entities</h2>   
    {data.entities.map((entity)=>{return <Link to={{
  pathname: '/related',
  state: {
    keyword: entity.text.split(' ')[0]
  }
}}><Badge style={{marginRight:'5px'}}>{entity.text}</Badge></Link>})} 
       
       <br/>
       <h2>Market Sentiment</h2>
    {data.entities.map((entity)=>{return (<><text>{entity.text}</text><Capacity value={Math.abs(entity.sentiment.score)*100}/><br/></>)})} 
      
   </Page.Content>
   </Page>
       
     );
  }
  else{
   return (<div style={{display:'flex', alignItems:'center', justifyContent:'center', height:'80vh',width:'100%'}}><Spinner /></div>)
  }
}

export default Story;