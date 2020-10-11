import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Card,Grid,Badge,Spacer,Tabs,Page,Capacity,Spinner,Button } from '@geist-ui/react'
import Axios from 'axios';
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
import ArrowUpCircle from '@geist-ui/react-icons/arrowUpCircle'
import ArrowDownCircle from '@geist-ui/react-icons/arrowDownCircle'
import { useHistory } from 'react-router-dom';

const Report = () => {
    const history = useHistory()
    const getUploadParams = () => {
      return { url: 'https://httpbin.org/post' }
    }
  
    const handleChangeStatus = ({ meta }, status) => {
      console.log(status, meta)
    }
  
    const handleSubmit = (files, allFiles) => {
      console.log(files.map(f => f.meta))
    
      allFiles.forEach(f => f.remove())
      
console.log(files)
var formData = new FormData();


formData.append('file',files[0].file);
localStorage.setItem('file', formData)
history.push({
    pathname: '/story',
    state: {data:
        {date: "09 Oct",
        imageURL: "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2020/10_oct/9_fri/img_1602224896421_854.jpg?",
        inshortslink: "https://inshorts.com/en/news/tcs-overtakes-accenture-to-become-worlds-most-valuable-it-company-1602227078962",
        news: "India's Tata Consultancy Services (TCS) surpassed Accenture for the first time in a year to become the world's most valuable information technology company. As of Thursday's close, the market capitalisation of the Tata Group flagship company stood at $144.8 billion compared with Accenture's $143.75 billion. IBM's market value is currently $117.1 billion.",
        time: "12:34 pm",
        title: "TCS overtakes Accenture to become world's most valuable IT company",
      }
    }})}

  
    return (
      <Dropzone
        getUploadParams={getUploadParams}
        onChangeStatus={handleChangeStatus}
        onSubmit={handleSubmit}
        maxFiles={1}
        styles={{ dropzone: {height:'400px' ,overflow:'hidden'}, inputLabel: {color:'black'} }}
      />
    )
  }
  
export default Report;