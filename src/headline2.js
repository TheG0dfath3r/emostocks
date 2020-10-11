import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './App.css';
import { Card,Grid,Badge,Spacer,Tabs,Page,Image } from '@geist-ui/react'
import List from './list';
import Report from './report';

function Related(props) {


    useEffect(()=>{
      
        axios.get(`https://emostock.herokuapp.com/news/business?keyword=${props.location.state.keyword}`).then((res)=>{

        setData(res.data.articles)
 

        })
  }
        
    ,[])


    const [data,setData] = useState([])
  return (
  
   <Page>  {console.log('fff')}
     <Page.Header><h1>🤑EmoStock</h1>
    
     </Page.Header>
     <Page.Content>
    <Tabs initialValue="1">
  <Tabs.Item label="Headlines" value="1"><Grid.Container gap={2} justify="center" align={'middle'}>
     
     
     {data.map((news)=>{
     
     
     
     return (<Grid xs={24}>
     <div>
     <Link to={{
  pathname: '/story',
  state: {
    data:news
  }
}} style={{textDecoration:'none'}}>
       <Card shadow style={{textAlign:"left"}}>
       <Image height={400} src={news.imageURL} />
     <h4>{news.title}</h4>
     <p style={{width:'95%'}}>{news.content}</p>
   
 </Card>
 </Link>
     </div>
  </Grid>)})}
     
     
     
     </Grid.Container></Tabs.Item>
     <Tabs.Item label="Stocks" value="2">
         <List/>
     </Tabs.Item>
     <Tabs.Item label="Reports" value="3">
         <Report/>
     </Tabs.Item>
</Tabs>
</Page.Content>
</Page>
    
  );
}

export default Related;
