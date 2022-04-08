import React, { Component } from 'react';

import './style/main.css'
import FileUpload from './components/fileUpload/fileUpload'
import Table from './components/table/table'

class Home extends Component{
    render(){
        return (
            <> 
                <nav class="navbar navbar-expand-md navbar-dark bg-steel fixed-top">
                    <div class="container nav-container">
                        <a class="navbar-brand mr-4">Assignment</a>
                        <button class="navbar-toggler" type="button" 
                                data-toggle="collapse" data-target="#navbarToggle" 
                                aria-controls="navbarToggle" aria-expanded="false" 
                                aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </nav>
                <main role="main" class="container">
                    <div class="row">
                        <div class="col-md-8">
                            <FileUpload></FileUpload>
                            <br></br>
                            <Table></Table>
                        </div>
                    
                    </div>
                </main> 
            </> 
        )
    }
}


export default Home;