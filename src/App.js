import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Card,Grid,Badge,Spacer,Tabs,Page } from '@geist-ui/react'
import Story from './story';
import Headlines from './headlines';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './login';
import Related from './headline2';

function App() {
  return (
    <main>
            <Switch>
                <Route path="/" component={Login} exact />
                <Route path="/news" component={Headlines} exact />
                <Route path="/story" component={Story} />
                <Route path="/related" component={Related} />
            
            </Switch>
        </main>
    
  );
}

export default App;
