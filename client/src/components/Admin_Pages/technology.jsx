import React, { Component } from 'react';
import TECH from "./HR_outline";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import '../component-CSS/technology.css'


class technology extends Component{
    render(){
        return(
            <div className="container-fluid d flex justify-content-center tech">
                <div className = "Title"> Tech Admin Page</div>
                <div className="row mx-auto">
                    <div className = "col-md-4 p-3">
                        <TECH title="Application Monitoring"/>
                    </div>
                    <div className = "col-md-4 p-3">
                        <TECH title="Tech Support"/>
                    </div>
                    <div className = "col-md-4 p-3">
                        <TECH title="App Development"/>
                    </div>
                    <div className = "col-md-4 p-3">
                        <TECH title="App Admin"/>
                    </div>
                    <div className = "col-md-4 p-3">
                        <TECH title="Release Management"/>
                    </div>
                </div>
                <div className="navbar-item d-flex justify-content-center">
                    <Button variant="danger" onClick={event => window.location.href="/login"}>Logout</Button>{' '}
                </div>
            </div>
        )
    }
}
export default technology;