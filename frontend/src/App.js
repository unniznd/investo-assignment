import React, { Component } from 'react';
import {  BrowserRouter as Router,Routes, Route } from 'react-router-dom';

import Home from './home/home'

class App extends Component{
    render(){
        return (
            <Router>
                <Routes>
                        <Route path='/'  element={<Home/>} />
                </Routes>                
            </Router>
        )
    }
}

export default App