import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Card,Grid,Badge,Spacer,Tabs,Page } from '@geist-ui/react'
import Story from './story';
import Headlines from './headlines';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <main>
            <Switch>
                <Route path="/" component={Headlines} exact />
                <Route path="/story" component={Story} />
            
            </Switch>
        </main>
    
  );
}

export default App;
