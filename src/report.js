import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Card,Grid,Badge,Spacer,Tabs,Page,Capacity,Spinner,Button } from '@geist-ui/react'
import Axios from 'axios';
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
import ArrowUpCircle from '@geist-ui/react-icons/arrowUpCircle'
import ArrowDownCircle from '@geist-ui/react-icons/arrowDownCircle'

const Report = () => {
    const getUploadParams = () => {
      return { url: 'https://httpbin.org/post' }
    }
  
    const handleChangeStatus = ({ meta }, status) => {
      console.log(status, meta)
    }
  
    const handleSubmit = (files, allFiles) => {
      console.log(files.map(f => f.meta))
    
      allFiles.forEach(f => f.remove())
      var formData = new FormData();
  console.log(files[0].file)
formData.append('file', files[0].file);
console.log(formData)
Axios.post('https://emostock.herokuapp.com/report', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
}).then((res)=>{console.log(res)})


    }
  
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